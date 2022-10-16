import { useState } from 'react';
import ReactCardFlip from "react-card-flip";
import "./Card.css";

export default function CardList({card}) {

    const [flip, setFlip] = useState(false);

    function handleFlip(evt) {
        evt.preventDefault();
        setFlip(!flip);
    }
    
        return (
            <>
                <ReactCardFlip isFlipped={flip} flipDirection="horizontal">
                    <div className="card">{card.question}</div>
                    <div className="card">{card.answer}</div>
                </ReactCardFlip>
                <br/>
                <button className="flip-button" onClick={handleFlip}>Flip</button>
            </>
        )
    }