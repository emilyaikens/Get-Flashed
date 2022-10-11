import { useState } from 'react';

export default function Card({card, index}) {

const [currentCard, setCurrentCard] = useState("");

    return (
        <>
        <div>card</div>
        <button>Back</button>
        <button>Flip</button>
        <button>Next</button>
        </>
    )
}