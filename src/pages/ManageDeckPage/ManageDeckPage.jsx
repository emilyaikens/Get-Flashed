import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import NewCardForm from '../../components/NewCardForm/NewCardForm';

// localhost:3000/managedeck

//Name of deck
//Make new card form
//List of existing cards

export default function ManageDeckPage({deck}) {

    let id = useParams().id;

    console.log(deck);

    return (
        <>
        {/* <Link to="/">
                <button>back to deck</button>
            </Link> */}
        <h1>Manage Deck Page</h1>
        <NewCardForm />
        <button>Delete Deck</button>
        </>
    )
}