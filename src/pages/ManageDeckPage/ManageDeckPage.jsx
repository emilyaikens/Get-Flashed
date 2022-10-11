import { Link } from 'react-router-dom';
import NewCardForm from '../../components/NewCardForm/NewCardForm';

export default function ManageDeckPage({deckName}) {

    return (
        <>
            {/* <Link to="/">
                    <button>back to deck</button>
                </Link> */}
            <h1>Manage Deck Page</h1>
            <h2>{deckName}</h2>
            <NewCardForm />
            <div>exiting cards go here</div>
            <button>Delete Deck</button>
        </>
    )
}