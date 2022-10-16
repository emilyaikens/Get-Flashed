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
            <div className={`card ${flip ? "flip" : ""}`}>
                <div className="front">{card.question}</div>
                <div className="back">{card.answer}</div>
            </div>
            <br/>
            <button className="flip-button" onClick={handleFlip}>Flip</button>
            </>
        )
    }