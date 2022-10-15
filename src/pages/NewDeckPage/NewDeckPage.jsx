import NewDeckForm from '../../components/NewDeckForm/NewDeckForm';

export default function NewDeckPage({setDeckName}) {

  return (
    <>
      <div className="topper"></div>
      < NewDeckForm setDeckName={setDeckName}/>
    </>
  );
}


