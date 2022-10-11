import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import NewCardForm from '../../components/NewCardForm/NewCardForm';

export default function ManageDeckPage({deckName}) {

    let id = useParams().id;

    return (
        <>
            <Link to={`/deckdetails/${id}`}>
                <button>Done</button>
            </Link>
            <h1>Manage Deck Page</h1>
            <h2>{deckName}</h2>
            <NewCardForm />
            <div>existing cards go here</div>
            <button>Delete Deck</button>
        </>
    )
}