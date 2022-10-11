import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { getCards } from '../../utilities/decks-api';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CardList from '../../components/CardList/CardList';

//button onclick, redirect to the ManageDeckPage route WITH ID

export default function DeckDetailsPage() {

    const [cards, setCards] = useState([]);
    const [cardIndex, setCardIndex] = useState(0);

    let id = useParams().id;

    useEffect(function () {
        async function findCards() {
            const myCards = await getCards(id);
            setCards(myCards);
        }
        findCards()
    }, []);

    let theCards= cards.map((card, index) => {
        return <CardList card={card} index={index} key={card._id} />
    })

    return (
        <>
        <h1>Deck Details Page</h1>
        <Link to={`/managedeck/${id}`}><button>Edit Deck</button></Link>
        <div>
            {theCards[cardIndex]}
        </div>
        <button>Back</button>
        <button>Next</button>
        </>
    )
}