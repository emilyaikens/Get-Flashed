import Deck from '../../components/Deck/Deck';

export default function DeckIndexPage() {
//import my decks from the database

//map those decks and send them to components/Deck

    return (
        <>
            {/* if i have decks
                show all of the decks
                else show the message "No decks yet" with
                button the links to build deck page */}
            <h1>Deck Index Page</h1>
            <Deck />
        </>
    );
}