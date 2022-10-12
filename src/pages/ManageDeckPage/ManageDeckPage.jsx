import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import NewCardForm from '../../components/NewCardForm/NewCardForm';
import { useEffect } from 'react';
import { getCards } from '../../utilities/decks-api';
import CardList from '../../components/CardList/CardList';

export default function ManageDeckPage({deckName, cards, setCards}) {

    let id = useParams().id;

    useEffect(function () {
        async function findCards() {
            const myCards = await getCards(id);
            setCards(myCards);
        }
        findCards()
    }, [cards]);

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
            <button>Delete Deck</button>
        </>
    )
}