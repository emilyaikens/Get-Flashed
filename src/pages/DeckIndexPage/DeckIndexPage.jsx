import { useState } from 'react';
import { useEffect } from 'react';
import { getMyDecks } from '../../utilities/decks-api';
import { Link } from 'react-router-dom';
import DeckList from '../../components/DeckList/DeckList';

export default function DeckIndexPage({setDeckName, decks, setDecks}) {

    useEffect(function () {
        async function getDecks() {
            const myDecks = await getMyDecks();
            setDecks(myDecks);
        }
        getDecks();
    }, []);

    let noDecks = "You have no decks yet";
        if (decks.length > 0) {
            noDecks = null;
        };

    return (
        <div>
            <h1>Deck Index Page</h1>
            <div>{noDecks}</div>
            <Link to="/deck/new">
                <button>New Deck</button>
            </Link>
            <br/>
            <DeckList decks={decks} setDeckName={setDeckName} />
        </div>
    );
}