import { Link } from 'react-router-dom';
//using the id of the deck, render the cards that are inside of this deck

export default function Deck ({key, item, index}) {

    //console.log(item)

    return (
        <>
        {/* <div>{item}</div> */}
        // this link will need to be updated with id!!
        <Link to='/deckdetails'>Deck</Link>
        </>
    )
}