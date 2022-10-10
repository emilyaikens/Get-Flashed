import { useState } from 'react';
import NewDeckForm from '../../components/NewDeckForm/NewDeckForm';

export default function NewDeckPage({setDecks}) {

  return (
    <>
    <h1>New Deck Page</h1>
    < NewDeckForm setDecks={setDecks}/>
    </>
  );
}


