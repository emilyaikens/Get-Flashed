import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getCards } from '../../utilities/cards-api';
import { deleteDeck } from '../../utilities/decks-api';
import CardList from '../../components/CardList/CardList';
import NewCardForm from '../../components/NewCardForm/NewCardForm';
import EditDeckNameForm from '../../components/EditDeckNameForm/EditDeckNameForm'

export default function ManageDeckPage({deckName, setDeckName, cards, setCards, decks, setDecks}) {

    const [addCard, setAddCard] = useState([]);

    const navigate = useNavigate();

    let id = useParams().id;

    useEffect(function () {
        async function findCards() {
            const myCards = await getCards(id);
            setCards(myCards.reverse());
        }
        findCards()
    }, [addCard]);
    
    function handleDelete(id) {
        try {
            deleteDeck(id);
            const updateDecks = decks.filter(function (decks) {
                return decks._id !== id;
            });
            setDecks(updateDecks);
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
            <Link to={`/deckdetails/${id}`}>
                <button>Done</button>
            </Link>
            <h1>Manage Deck Page</h1>
            <h2>{deckName}</h2>
            <EditDeckNameForm id={id} deckName={deckName} setDeckName={setDeckName} />
            <br/>
            <NewCardForm setAddCard={setAddCard}/>
            <br/>
            <div>{theCards}</div>
            <button onClick={evt => {evt.preventDefault(); handleDelete(id)}} >Delete Deck</button>
        </>
    )
}