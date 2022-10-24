import { Link } from 'react-router-dom';
import './Deck.css';

export default function Deck ({deck, index, setDeckName}) {

    //colors array and logic below determine color of the deck

    const colors = ['#8bc0a6', '#c4e3d4', '#f7dcb5', '#f5caac', '#f2a098'];
    const ends = [50, 16, 27, 38, 49];

    let cardIndex = index
    if (index > 4 && index < 9) {
        cardIndex = index - 5
    } else if (index > 8 && index < 14) {
        cardIndex = index - 10
    } else if (index > 13 && index < 19) {
        cardIndex = index - 15
    } else if (index > 18) {
        cardIndex = Math.floor(Math.random() * 4);
    };

    let n = index.split();

    //each deck is a button that links to DeckDetailsPage

    return (
        <>
            <Link to={`/deckdetails/${deck._id}`}>
                <button style={{backgroundColor:`${colors[cardIndex]}`}} className="deck" onClick={() => setDeckName(deck.name)}>{deck.name}</button>
            </Link>
            <br/>
        </>
    )
}