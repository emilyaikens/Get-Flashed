import { useState } from 'react';
import "./Card.css";

export default function CardList({card, cardColor, setCardColor}) {

    //flip useState and handleFlip function are used to "flip" card by changing className of card

    const [flip, setFlip] = useState(false);

    function handleFlip(evt) {
        evt.preventDefault();
        setFlip(!flip);
    };

    //const colors = ['#8bc0a6', '#c4e3d4', '#f7dcb5', '#f5caac', '#f2a098'];

    function handleGreen(evt) {
        evt.preventDefault();
        setCardColor("#c4e3d4");
    };

    function handleYellow(evt) {
        evt.preventDefault();
        setCardColor("#f7dcb5");
    };

    function handleOrange(evt) {
        evt.preventDefault();
        setCardColor("#f5caac");
    };

    function handleRed(evt) {
        evt.preventDefault();
        setCardColor("#f2a098");
    };

    function handleWhite(evt) {
        evt.preventDefault();
        setCardColor("white");
    };

        return (
            <>
            <button className="color-button" onClick={handleGreen} style={{color: "#c4e3d4", backgroundColor: "#c4e3d4"}}>o</button>
            <button className="color-button" onClick={handleYellow} style={{color: "#f7dcb5", backgroundColor: "#f7dcb5"}}>o</button>
            <button className="color-button" onClick={handleOrange} style={{color: "#f5caac", backgroundColor: "#f5caac"}}>o</button>
            <button className="color-button" onClick={handleRed} style={{color: "#f2a098", backgroundColor: "#f2a098"}}>o</button>
            <button className="color-button" onClick={handleWhite} style={{color: "white", backgroundColor: "white"}}>o</button>
            <div><br/></div>
            <div className={`card ${flip ? "flip" : ""}`} style={{backgroundColor: cardColor}}>
                <div className="front">{card.question}</div>
                <div className="back">{card.answer}</div>
            </div>
            <br/>
            <button className="flip-button" onClick={handleFlip}>Flip</button>
            </>
        )
    }