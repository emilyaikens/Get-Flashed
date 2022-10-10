import { useEffect } from 'react';
import Deck from '../../components/Deck/Deck';
import { getAll } from '../../utilities/decks-api';

export default function DeckIndexPage({deck}) {

    async function getDecks() {
        const decks = await getAll()
    }

    useEffect(() => {
        getDecks();
    }, []);


//map those decks and send them to components/Deck

    return (
        <>
            {/* if i have decks
                show all of the decks
                else show the message "No decks yet" with
                button the links to build deck page */}
            <h1>Deck Index Page</h1>
            <Deck />
        </>
    );
}