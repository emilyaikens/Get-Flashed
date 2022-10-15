import { Link } from 'react-router-dom';

export default function NotMyDeck({deck, index}) {

    const colors = ['#8bc0a6', '#c4e3d4', '#f7dcb5', '#f5caac', '#f2a098'];

    let cardIndex = index
    if (index > 4 && index < 9) {
        cardIndex = index - 5
    } else if (index > 8 && index < 14) {
        cardIndex = index - 10
    } else if (index > 13 && index < 19) {
        cardIndex = index - 15
    } else if (index > 18) {
        cardIndex = Math.floor(Math.random() * 4);
    };

    return (
        <>
            <Link to={`/deckdetails/${deck._id}`}>
                <button style={{backgroundColor:`${colors[cardIndex]}`}} className="deck">{deck.name}</button>
            </Link>
        </>
    )
}