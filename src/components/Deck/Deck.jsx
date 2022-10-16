import { Link } from 'react-router-dom';
import './Deck.css';

export default function Deck ({deck, index, setDeckName}) {

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

// Payne's code
    // const colorParams = {2:0, 4:1, 6:2, 8:3};
    // let colorIndex = 0;
    // let colorSelection = 0;
    // if(index <= 5){
    //   colorIndex = index - 1; 
    //   colorSelection = colorParams[colorIndex];
    // } else if(index%5 === 0){
    //   colorSelection = 4; 
    // } else {
    //   let decimalNumber = index/5;
    //   let key = (decimalNumber + "").split(".");
    //   colorIndex = key[1]; 
    //   colorSelection = colorParams[colorIndex];
    // }

    return (
        <>
            <Link to={`/deckdetails/${deck._id}`}>
                <button style={{backgroundColor:`${colors[cardIndex]}`}} className="deck" onClick={() => setDeckName(deck.name)}>{deck.name}</button>
            </Link>
            <br/>
        </>
    )
}