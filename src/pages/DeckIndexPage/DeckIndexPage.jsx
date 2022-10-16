import { useEffect } from 'react';
import { getMyDecks } from '../../utilities/decks-api';
import { Link } from 'react-router-dom';
import DeckList from '../../components/DeckList/DeckList';
import './DeckIndexPage.css';

export default function DeckIndexPage({setDeckName, decks, setDecks}) {

    //find all decks belonging to this user and update setDecks use state

    useEffect(function () {
        async function getDecks() {
            const myDecks = await getMyDecks();
            setDecks(myDecks);
        }
        getDecks();
    }, []);

    //logic below:
    //if above function returns decks, show them. Otherwise, render message
    //"you have no decks yet" and the cowboy image

    return (
        <>
        <div className="topper"></div>
        {decks.length > 0 ?
            <h1 style={{fontFamily:'Peralta'}}>My Decks</h1>
        :
        <>
            <h4 style={{fontFamily:'Peralta'}}>You have no decks yet</h4>
            <img className="index-cowboy" src="https://i.imgur.com/h9DRnp1.png" />
        </>
        }
            <br/>
            <Link to="/deck/new">
                <button className="form-button">New Deck</button>
            </Link>
            <div><br/></div>
            <br/>
            <DeckList decks={decks} setDeckName={setDeckName} />
        </>
    );
}