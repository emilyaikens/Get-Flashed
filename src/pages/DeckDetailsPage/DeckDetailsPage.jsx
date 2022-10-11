import { useParams } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import { getCards } from '../../utilities/decks-api';
import Card from '../../components/Card/Card';

//button onclick, redirect to the ManageDeckPage route WITH ID

export default function DeckDetailsPage() {

    let id = useParams().id;

    const [cards, setCards] = useState([]);

    useEffect(function () {
        async function findCards() {
            const myCards = await getCards(id);
            setCards(myCards);
        }
        findCards();
    }, []);

    return (
        <>
        <h1>Deck Details Page</h1>
        <button>Edit Deck</button>
        <Card />
        <button>Back</button>
        <button>Flip</button>
        <button>Next</button>
        </>
    )
}