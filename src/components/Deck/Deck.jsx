import { Link } from 'react-router-dom';
//using the id of the deck, render the cards that are inside of this deck

export default function Deck ({deck, key, index}) {

    return (
        <>
            {/* // this link will need to be updated with id!! */}
            <Link to='/deckdetails'>{deck}</Link>
            <br/>
        </>
    )
}