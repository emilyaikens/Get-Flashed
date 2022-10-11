import { useState } from 'react';
import Card from '../Card/Card';

export default function CardList({card, index}) {

//const [index, setIndex] = useState(0);

    return (
        <>
        {card.question}
        <br/>
        <button>Flip</button>
        </>
    )
}