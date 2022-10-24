import { Link } from 'react-router-dom';

export default function NotMyDeck({deck, index}) {

    //colors array and logic below are used to set color of each deck

    const colors = ['#8bc0a6', '#c4e3d4', '#f7dcb5', '#f5caac', '#f2a098'];
    const ends = ['50', '16', '27', '38', '49'];

    let cardIndex = index
    let n = index.toString().split('');

    for (let i = 0; i < 5; i++) {
        if (ends[i].includes(n[n.length - 1])) {
            cardIndex = i;
        };
    };

    //each deck is a button that links to DeckDetailsPage

    return (
        <>
            <Link to={`/deckdetails/${deck._id}`}>
                <button style={{backgroundColor:`${colors[cardIndex]}`}} className="deck">{deck.name}</button>
            </Link>
        </>
    )
};