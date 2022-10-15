import { useState } from 'react';
import { useEffect } from 'react';
import { getMyDecks } from '../../utilities/decks-api';
import { Link } from 'react-router-dom';
import DeckList from '../../components/DeckList/DeckList';
import './DeckIndexPage.css';

export default function DeckIndexPage({setDeckName, decks, setDecks}) {

    useEffect(function () {
        async function getDecks() {
            const myDecks = await getMyDecks();
            setDecks(myDecks);
        }
        getDecks();
    }, []);

    let noDecks = <div>
                    <div>"You have no decks yet";</div>
                    <img className="index-cowboy" src="https://i.imgur.com/h9DRnp1.png" />
                </div>

    if (decks.length > 0) {
        noDecks = null;
    };

    return (
        <>
            <div className="topper"></div>
            <h1 style={{fontFamily:'Peralta'}}>My Decks</h1>
            <div>{noDecks}</div>
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