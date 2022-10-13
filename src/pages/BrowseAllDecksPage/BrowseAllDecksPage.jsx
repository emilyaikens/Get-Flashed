import { useState } from 'react';
import { useEffect } from 'react';
import { getAllDecks } from '../../utilities/decks-api';
import NotMyDeck from '../../components/NotMyDeck/NotMyDeck';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function BrowseAllDecks() {

    const [allDecks, setAllDecks] = useState([]);
    const [search, setSearch] = useState(false);

    useEffect(function () {
        async function showAllDecks() {
            const allDecks = await getAllDecks();
            setAllDecks(allDecks);
        }
        showAllDecks();
    }, []);

    let browseDecks = "";

    console.log(allDecks);

    if (allDecks.length > 9) {
        browseDecks = allDecks.slice([0], [9]).map((value, index) => 
            <NotMyDeck deck={value} key={value._id} index={index}/>)
    } else {
        browseDecks = allDecks.map((value, index) => 
            <NotMyDeck deck={value} key={value._id} index={index}/>)
    };

    return (
        <>
            <h1>Browse All Decks Page</h1>
            <SearchBar />
            {!search ? 
            <div>{browseDecks}</div>
            :
            <div>search happened</div>
            }
            
        </>
    )
}