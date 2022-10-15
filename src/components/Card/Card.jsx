import { useState } from 'react';
import "./Card.css";

export default function CardList({card}) {

    const [flip, setFlip] = useState(false);

    function handleFlip(evt) {
        evt.preventDefault();
        setFlip(!flip);
    }

    const cardBack = "card-back"
    const cardFront = "card-front"
    const testing = "flipped"
    
        return (
            <>
                {flip ?
                <div className="card">{card.answer}</div>
                :
                <div className="card">{card.question}</div>
                }
                <br/>
                <button className="flip-button" onClick={handleFlip}>Flip</button>
            </>
        )
    }