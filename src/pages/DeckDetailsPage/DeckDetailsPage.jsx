import Card from '../../components/Card/Card';
import {useParams} from "react-router-dom";

//button onclick, redirect to the ManageDeckPage route WITH ID

export default function DeckDetailsPage() {
    return (
        <>
        <h1>Deck Details Page</h1>
        <button>Edit Deck</button>
        <Card />
        <button>Back</button>
        <button>Flip</button>
        <button>Next</button>
        </>
    )
}