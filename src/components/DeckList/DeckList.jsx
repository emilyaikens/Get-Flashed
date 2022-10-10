import Deck from '../Deck/Deck';

export default function DeckList({decks}) {

    const myDecks = decks.map((value, index) => 
        <Deck deck={value.name} key={value._id} index={index}/>)

    //console.log(decks)
    //console.log(myDecks)

    return (
        <>
            {myDecks}
        </>
    )
}