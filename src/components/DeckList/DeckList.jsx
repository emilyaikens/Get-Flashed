import Deck from '../Deck/Deck';
import './DeckList.css';

export default function DeckList({decks, setDeckName}) {

    //decks and setDeckName useStates come from DeckIndexPage

    const myDecks = decks.map((value, index) => 
        <Deck deck={value} key={value._id} index={index} setDeckName={setDeckName}/>)

    return (
        <>
            <div className="deck-container">
                {myDecks}
            </div>
        </>
    )
}