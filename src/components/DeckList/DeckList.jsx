import Deck from '../Deck/Deck';

export default function DeckList({decks}) {

    const myDecks = decks.map((value, index) => 
        <Deck deck={value} key={value._id} index={index}/>)

    return (
        <>
            {myDecks}
        </>
    )
}