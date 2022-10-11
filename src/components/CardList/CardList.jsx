import { useState } from 'react';
import Card from '../Card/Card';

export default function CardList({cards, index}) {

const [currentCard, setCurrentCard] = useState("");

const myCards = cards.map((value, index) => 
        <Card card={value} key={value._id} index={index}/>)

    return (
        <>
        {myCards}
        <button>Back</button>
        <button>Flip</button>
        <button>Next</button>
        </>
    )
}