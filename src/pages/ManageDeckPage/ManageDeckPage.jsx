import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getCards } from '../../utilities/decks-api';
import { deleteDeck } from '../../utilities/decks-api';
import CardList from '../../components/CardList/CardList';
import NewCardForm from '../../components/NewCardForm/NewCardForm';

export default function ManageDeckPage({deckName, cards, setCards, decks, setDecks}) {

    const navigate = useNavigate();

    let id = useParams().id;

    useEffect(function () {
        async function findCards() {
            const myCards = await getCards(id);
            setCards(myCards);
        }
        findCards()
    }, [cards]);

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
        return <CardList card={card} index={index} key={card._id} />
    })

    return (
        <>
            <Link to={`/deckdetails/${id}`}>
                <button>Done</button>
            </Link>
            <h1>Manage Deck Page</h1>
            <h2>{deckName}</h2>
            <NewCardForm />
            <div>{theCards}</div>
            <button onClick={() => handleDelete(id)} >Delete Deck</button>
        </>
    )
}