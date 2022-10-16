import { useState } from 'react';
import "./Card.css";

export default function CardList({card}) {

    const [flip, setFlip] = useState(false);

    function handleFlip(evt) {
        evt.preventDefault();
        setFlip(!flip);
    }
    
        return (
            <>
            <div className="card">{flip ? card.answer : card.question}</div>
            <br/>
            <button className="flip-button" onClick={handleFlip}>Flip</button>
            </>
        )
    }