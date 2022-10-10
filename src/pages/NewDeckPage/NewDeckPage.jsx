import NewDeckForm from '../../components/NewDeckForm/NewDeckForm';

export default function NewDeckPage({setDeck}) {

  return (
    <>
    <h1>New Deck Page</h1>
    < NewDeckForm setDeck={setDeck}/>
    </>
  );
}


