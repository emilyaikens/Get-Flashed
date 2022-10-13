import { useState } from 'react';
import { useEffect } from 'react';
import { getAllDecks } from '../../utilities/decks-api';

export default function BrowseAllDecks() {

    const [allDecks, setAllDecks] = useState([])

    useEffect(function () {
        async function showAllDecks() {
            const allDecks = await getAllDecks();
            setAllDecks(allDecks);
        }
        showAllDecks();
    }, []);

    return (
        <>
            <h1>Browse All Decks Page</h1>
        </>
    )
}