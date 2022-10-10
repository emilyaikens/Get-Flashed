import {useState} from 'react';
import { useEffect } from 'react';
import { getAllDecks } from '../../utilities/decks-api';
import DeckList from '../../components/DeckList/DeckList';

export default function DeckIndexPage() {

    const [decks, setDecks] = useState([]);

    useEffect(function () {
        async function getDecks() {
            const myDecks = await getAllDecks();
            setDecks(myDecks);
        }
        getDecks();
    }, []);

    let noDecks = "You have no decks yet";
        if (decks.length > 0) {
            noDecks = null;
        };

    return (
        <>
            {/* if i have decks
                show all of the decks
                else show the message "No decks yet" with
                button the links to build deck page */}
            <h1>Deck Index Page</h1>
            <div>{noDecks}</div>
            <button>New Deck</button>
            <br/>
            <DeckList decks={decks}/>
        </>
    );
}