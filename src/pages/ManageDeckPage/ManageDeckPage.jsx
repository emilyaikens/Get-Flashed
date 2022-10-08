import NewCardForm from '../../components/NewCardForm/NewCardForm';

// localhost:3000/managedeck

//Name of deck
//Make new card form
//List of existing cards

export default function ManageDeckPage() {
    return (
        <>
        <div>Link back to DeckDetailsPage says 'all done'</div>
        <h1>Manage Deck Page</h1>
        <NewCardForm />
        <button>Delete Deck</button>
        </>
    )
}