import NewDeckForm from '../../components/NewDeckForm/NewDeckForm';

export default function NewDeckPage({setDeckName}) {

  return (
    <>
    <h1>New Deck Page</h1>
    < NewDeckForm setDeck={setDeckName}/>
    </>
  );
}


