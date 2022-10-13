import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { getCards } from '../../utilities/cards-api';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';

//button onclick, redirect to the ManageDeckPage route WITH ID

export default function DeckDetailsPage({setDeckName, deckName, cards, setCards}) {

    const [cardIndex, setCardIndex] = useState(0);

    function handleBack(evt) {
        evt.preventDefault();
        if (cardIndex > 0) {
            setCardIndex(cardIndex - 1)
        };
    };

    function handleNext(evt) {
        evt.preventDefault();
        if (cardIndex < (cards.length - 1)) {
            setCardIndex(cardIndex + 1)
        };
    };

    let id = useParams().id;

    useEffect(function () {
        async function findCards() {
            const myCards = await getCards(id);
            setCards(myCards);
        }
        findCards()
    }, []);

    let theCards= cards.map((card, index) => {
        return <Card card={card} key={card._id} />
    })

    return (
        <>
            <h1>Deck Details Page</h1>
            <Link to={`/managedeck/${id}`}>
                <button onClick={()=>setDeckName(deckName)}>Edit Deck</button>
            </Link>
            <div>
                {theCards[cardIndex]}
            </div>
            <button onClick={handleBack}>Back</button>
            <button onClick={handleNext}>Next</button>
        </>
    )
}