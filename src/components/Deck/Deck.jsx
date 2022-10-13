import { Link } from 'react-router-dom';
import './Deck.css';

export default function Deck ({deck, setDeckName}) {

    return (
        <>
            <Link to={`/deckdetails/${deck._id}`}>
                <button className="deck" onClick={() => setDeckName(deck.name)}>{deck.name}</button>
            </Link>
            <br/>
        </>
    )
}