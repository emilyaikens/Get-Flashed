import NewCardForm from '../../components/NewCardForm/NewCardForm';

//Name of deck
//Make new card form
//List of existing cards

export default function ManageDeckPage() {
    return (
        <>
        <h1>Manage Deck Page</h1>
        <NewCardForm />
        <button>Delete Deck</button>
        </>
    )
}