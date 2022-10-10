import Deck from '../Deck/Deck';

export default function DeckList({decks}) {

    const myDecks = decks.map(d => 
        <Deck deck={d} key={d._id}/>)

    console.log(decks)

    return (
        <>
            < Deck />
        </>
    )
}