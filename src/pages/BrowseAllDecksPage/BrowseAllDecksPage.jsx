// import { useState } from 'react';
// import { useEffect } from 'react';
// import { getAllDecks } from '../../utilities/decks-api';
// import NotMyDeck from '../../components/NotMyDeck/NotMyDeck';
// import SearchBar from '../../components/SearchBar/SearchBar';
// import './BrowseAllDecksPage';

// export default function BrowseAllDecks() {

//     //this use state keeps track of public decks

//     const [allDecks, setAllDecks] = useState([]);

//     //this function fetches public decks from all users and updates use state above

//     useEffect(function () {
//         async function showAllDecks() {
//             const allDecks = await getAllDecks();
//             setAllDecks(allDecks);
//         }
//         showAllDecks();
//     }, []);

//     //variables and logic below:
//     //if more than 10 decks are returned from the function above, only map the first 10
//     //otherwise, map all of them

//     let browseDecks = "";
//     let noDeck = ""

//     if (allDecks.length > 10) {
//         browseDecks = allDecks.slice([0], [9]).map((value, index) => 
//             <NotMyDeck deck={value} key={value._id} index={index}/>)
//     } else {
//         browseDecks = allDecks.map((value, index) => 
//             <NotMyDeck deck={value} key={value._id} index={index}/>)
//     };

//     //below: if there are no decks returned by the showAllDecks/getAllDecks functions
//     //then show the "sorry there are no decks..." message
//     //otherwise, show the decks that have been fetched from the database

//     return (
//         <>
//         <div className="topper"></div>
//         {allDecks.length > 0 ?
//             <>
//                 <SearchBar setAllDecks={setAllDecks}/>
//                 <div>{browseDecks}</div>
//                 <div>{noDeck}</div>
//             </>
//         :
//         <>
//             <h3 style={{fontFamily:'Peralta'}}>"Sorry, there are no public decks that match your search"</h3>
//             <img className="cowboy" src="https://i.imgur.com/g7A8rGD.png" />
//         </>
//         }
//         </>
//     )
// }

import { useState } from 'react';
import { useEffect } from 'react';
import { getAllDecks } from '../../utilities/decks-api';
import NotMyDeck from '../../components/NotMyDeck/NotMyDeck';
import SearchBar from '../../components/SearchBar/SearchBar';
import './BrowseAllDecksPage';

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