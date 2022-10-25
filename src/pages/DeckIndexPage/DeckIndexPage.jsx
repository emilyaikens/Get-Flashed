import { useState } from 'react';
import { useEffect } from 'react';
import { getMyDecks } from '../../utilities/decks-api';
import DeckList from '../../components/DeckList/DeckList';
import NewDeckForm from '../../components/NewDeckForm/NewDeckForm';
import './DeckIndexPage.css';

export default function DeckIndexPage({setDeckName, decks, setDecks}) {

    //when true, the NewDeckForm is visible, when false, it is not. 
    //buttons on click will toggle state between true and false

    const [seeForm, setSeeForm] = useState(false);

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
    // New Deck and Back buttons will toggle the seeForm use state between true (form visible)
    //and false (form not visible)

    return (
        <>
        <div className="topper"></div>
        {decks.length > 0 ?
            <></>
        :
        <>
            <h4 style={{fontFamily:'Peralta'}}>You have no decks yet</h4>
            <img className="index-cowboy" src="https://i.imgur.com/1HWrs7D.png" alt="cowboy" />
        </>
        }
            {seeForm ? 
            <>
                <h1 style={{fontFamily:'Peralta'}}>New Deck</h1>
                <div><br/></div>
                <button className="form-button" onClick={() => {setSeeForm(!seeForm)}}>Back</button>
                <div><br/></div>
                <NewDeckForm setDeckName={setDeckName}/>
            </>
            :
            <>
                <h1 style={{fontFamily:'Peralta'}}>My Decks</h1>
                <br/>
                <button className="form-button" onClick={() => {setSeeForm(!seeForm)}}>New Deck</button>
                <div><br/></div>
                <br/>
                <DeckList decks={decks} setDeckName={setDeckName} />
            </>
            }
        </>
    );
}