import { useState } from 'react';

export default function CardList({card}) {

    const [flip, setFlip] = useState(false);

    function handleFlip(evt) {
        evt.preventDefault();
        setFlip(!flip);
    }
    
        return (
            <>
            {flip ? card.answer : card.question}
            <br/>
            <button onClick={handleFlip}>Flip</button>
            </>
        )
    }