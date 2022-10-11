import { Link } from 'react-router-dom';

export default function Deck ({deck, setDeckName}) {

    return (
        <>
            <Link to={`/deckdetails/${deck._id}`}>
                <div onClick={() => setDeckName(deck.name)}>{deck.name}</div>
            </Link>
            <br/>
        </>
    )
}