import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getCards } from '../../utilities/cards-api';
import { deleteDeck } from '../../utilities/decks-api';
import { deckOwner } from '../../utilities/decks-api'
import CardList from '../../components/CardList/CardList';
import NewCardForm from '../../components/NewCardForm/NewCardForm';
import EditDeckNameForm from '../../components/EditDeckNameForm/EditDeckNameForm'

export default function ManageDeckPage({deckName, setDeckName, cards, setCards, user}) {

    const [addCard, setAddCard] = useState([]);
    const [owner, setOwner] = useState([]);

    const navigate = useNavigate();

    let id = useParams().id;

console.log(cards)

    useEffect(function () {
        async function findCards() {
            const myCards = await getCards(id);
            setCards(myCards.reverse());
        }
        findCards()
    }, [addCard]);

    useEffect(function () {
        async function findOwner() {
            const deckUser = await deckOwner(id);
            setOwner(deckUser);
        }
        findOwner()
    }, []);

    function handleDelete(id) {
        try {
            deleteDeck(id);
            navigate('/');
        } catch {
            console.log('delete deck failed');
        }
    };

    let theCards= cards.map((card, index) => {
        return <CardList card={card} index={index} key={card._id} cards={cards} setCards={setCards} setAddCard={setAddCard}/>
    })

    return (
        <>
        <div className="topper"></div>
        {owner === user._id ?
        <>
            <Link to={`/deckdetails/${id}`}>
                <button className="form-button">Back to Deck</button>
            </Link>
            <div>
                <br/>
            </div>
            <EditDeckNameForm id={id} deckName={deckName} setDeckName={setDeckName} />
            <br/>
            <NewCardForm setAddCard={setAddCard}/>
            <br/>
            <div>{theCards}</div>
            <br/>
            <h3>DANGER ZONE!</h3>
            <br/>
            <button className="delete-button" onClick={evt => {evt.preventDefault(); handleDelete(id)}} >Delete Deck</button>
        </>
        :
        <>
        <div>No trespassing image goes here</div>
        <h4 style={{fontFamily:'Peralta'}}>You cannot edit other users decks</h4>
        </>
    }
    <div className="topper"></div>
    </>
    )
}