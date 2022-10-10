import { Link } from 'react-router-dom';

export default function Deck ({deck}) {

    return (
        <>
            <Link to={`/deckdetails/${deck._id}`}>{deck.name}</Link>
            <br/>
        </>
    )
}