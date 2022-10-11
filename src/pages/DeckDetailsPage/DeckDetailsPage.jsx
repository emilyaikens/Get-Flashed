import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { getCards } from '../../utilities/decks-api';
import CardList from '../../components/CardList/CardList';

//button onclick, redirect to the ManageDeckPage route WITH ID

export default function DeckDetailsPage({cards, setCards}) {

    let id = useParams().id;

    useEffect(function () {
        async function findCards() {
            const myCards = await getCards(id);
            setCards(myCards);
        }
        findCards()
    }, []);

    return (
        <>
        <h1>Deck Details Page</h1>
        <button>Edit Deck</button>
        <CardList cards={cards}/>
        </>
    )
}