
export default function NotMyDeck({deck}) {

    return (
        <>
            {/* <Link to={`/deckdetails/${deck._id}`}> */}
                <button className="deck">{deck.name}</button>
            {/* </Link> */}
        </>
    )
}

//onClick={() => setDeckName(deck.name)}