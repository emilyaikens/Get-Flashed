import {useState} from 'react';
import { useEffect } from 'react';
import { getAllDecks } from '../../utilities/decks-api';
import Deck from '../../components/Deck/Deck';

export default function DeckIndexPage() {

    const [decks, setDecks] = useState([]);

    useEffect(function () {
        async function getDecks() {
            const decks = await getAllDecks();
            console.log(decks[0].name);
            setDecks(decks);
        }
        getDecks()
    }, []);

    return (
        <>
            {/* if i have decks
                show all of the decks
                else show the message "No decks yet" with
                button the links to build deck page */}
            <h1>Deck Index Page</h1>
            <Deck decks={decks}/>
        </>
    );
}