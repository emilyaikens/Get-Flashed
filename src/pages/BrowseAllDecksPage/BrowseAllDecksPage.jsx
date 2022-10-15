import { useState } from 'react';
import { useEffect } from 'react';
import { getAllDecks } from '../../utilities/decks-api';
import NotMyDeck from '../../components/NotMyDeck/NotMyDeck';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function BrowseAllDecks() {

    const [allDecks, setAllDecks] = useState([]);

    useEffect(function () {
        async function showAllDecks() {
            const allDecks = await getAllDecks();
            setAllDecks(allDecks);
        }
        showAllDecks();
    }, []);

    let browseDecks = "";
    let noDeck = ""

    if (allDecks.length === 0) {
        noDeck = <div>
                    <img className="index-cowboy" src="https://i.imgur.com/h9DRnp1.png" />
                    <div>"Sorry, there are no public decks that match your search"</div>
                </div>
    }

    if (allDecks.length > 9) {
        browseDecks = allDecks.slice([0], [9]).map((value, index) => 
            <NotMyDeck deck={value} key={value._id} index={index}/>)
    } else {
        browseDecks = allDecks.map((value, index) => 
            <NotMyDeck deck={value} key={value._id} index={index}/>)
    };

    return (
        <>
            <div className="topper"></div>
            <SearchBar allDecks={allDecks} setAllDecks={setAllDecks}/>
            <div>{browseDecks}</div>
            <div>{noDeck}</div>
        </>
    )
}