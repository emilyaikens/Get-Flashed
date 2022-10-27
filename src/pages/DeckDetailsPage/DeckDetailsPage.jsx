import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { getCards } from '../../utilities/cards-api';
import { findOne } from '../../utilities/decks-api';
import Card from '../../components/Card/Card';
import './DeckDetailsPage.css';

export default function DeckDetailsPage({setDeckName, deckName, cards, setCards, user}) {

    //grab id from url parameters
    
    let id = useParams().id;

    //use state below determines which card is visible
    //updated by handleBack and handleNext functions

    const [cardIndex, setCardIndex] = useState(0);

    //use state below: updated by findDeck function, contains info from the deck whose id matches url param id

    const [thisDeck, setThisDeck] = useState("");

    //when user clicks "back" button, update cardIndex use state to be less one

    function handleBack(evt) {
        evt.preventDefault();
        if (cardIndex > 0) {
            setCardIndex(cardIndex - 1)
        };
    };

    //when user clicks "next" button, update cardIndex use state to be plus one

    function handleNext(evt) {
        evt.preventDefault();
        if (cardIndex < (cards.length - 1)) {
            setCardIndex(cardIndex + 1)
        };
    };

    //find deck using the id grabbed from the url params
    //used to confirm user id

    useEffect(function () {
        async function findDeck() {
            const oneDeck = await findOne(id);
            setThisDeck(oneDeck)
        }
        findDeck()
    }, [])

    //find cards belonging to the current deck
    //'shuffle' the cards in the deck using Fisher-Yates Algorithm

    useEffect(function () {
        async function findCards() {
            const myCards = await getCards(id);
            let n = myCards.length;
            for (let i = n-1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [myCards[i], myCards[j]] = [myCards[j], myCards[i]];
            };
            setCards(myCards);
        }
        findCards()
    }, []);

    //map cards returned by the function above to Card component

    let theCards= cards.map((card) => {
        return <Card card={card} key={card._id}/>
    })

    //logic below:
    //the Edit Deck button is only visible if the current user matches the user who created the current deck
    //if there are no cards in the deck, show the message "there are no cards in this deck yet"
    //**Note: the "flip" button visible on this page can be found in the Card component

    return (
        <>
            <div className="topper"></div>
            {cards.length > 0 ? 
            <>
                {thisDeck.user === user._id ? 
                    <Link to={`/managedeck/${id}`}>
                        <button className="form-button" onClick={()=>setDeckName(deckName)}>Edit Deck</button>
                    </Link> 
                    : 
                    <div></div>
                    }
                <div><br/></div>
                <div>
                    {theCards[cardIndex]}
                </div>
                <br/>
                <button className="scroll-button" onClick={handleBack}>Back</button>
                <button className="scroll-button" onClick={handleNext}>Next</button>
            </>
            :
            <>
                <h3 style={{fontFamily:'Peralta'}}>there are no cards in this deck yet</h3>
                <br/>
                <Link to={`/managedeck/${id}`}>
                    <button className="form-button" onClick={()=>setDeckName(deckName)}>Add Cards</button>
                </Link> 
                <br/>
                <img className="cowboy" src="https://i.imgur.com/1HWrs7D.png" alt="cowboy" />
            </>
            }
        </>
    )
}