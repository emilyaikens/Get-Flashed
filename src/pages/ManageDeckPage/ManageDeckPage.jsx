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

    //addCard useState is used in findCards dep array. set in CardList component

    const [addCard, setAddCard] = useState([]);

    //owner useState is used to check whether the current user matches the deck's user

    const [owner, setOwner] = useState([]);

    //const navigate is necessary to use useNavigate from react-router-dom

    const navigate = useNavigate();

    //grab deck id from url params

    let id = useParams().id;

    //find cards that "belong" to current deck

    useEffect(function () {
        async function findCards() {
            const myCards = await getCards(id);
            setCards(myCards.reverse()); //shows most recent on top
        }
        findCards()
    }, [addCard]);

    //find the user of the current deck and update the owner usestate

    useEffect(function () {
        async function findOwner() {
            const deckUser = await deckOwner(id);
            setOwner(deckUser);
        }
        findOwner()
    }, []);

    //on click delete button, find deck by id and delete

    function handleDelete(id) {
        try {
            deleteDeck(id);
            navigate('/');
        } catch {
            console.log('delete deck failed');
        }
    };

    //map the cards (use state updated by findCards function) to cardList
    //setAddCard is set by handleDelete function in cardList so that findCards
    //will call called again (addCard in useEffect dep array)

    let theCards= cards.map((card) => {
        return <CardList card={card} key={card._id} setAddCard={setAddCard}/>
    })

    //logic below:
    //if the current user matches the deck's user then they can edit the deck
    //otherwise, they see a "no trespassing" image

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