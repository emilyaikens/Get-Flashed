import './App.css';
import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import {getUser} from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NewDeckPage from '../NewDeckPage/NewDeckPage';
import DeckIndexPage from '../DeckIndexPage/DeckIndexPage';
import DeckDetailsPage from '../DeckDetailsPage/DeckDetailsPage';
import ManageDeckPage from '../ManageDeckPage/ManageDeckPage';
import BrowseAllDecksPage from '../BrowseAllDecksPage/BrowseAllDecksPage';

function App() {
    // set the user by calling getUser function
    const [user, setUser] = useState(getUser());
    const [decks, setDecks] = useState([]);
    const [deckName, setDeckName] = useState([]);
    const [cards, setCards] = useState([]);

    return (
        < main className="App">
            {user ?
                <>
                    <NavBar user={user} setUser={setUser}/>
                    <Routes>
                        <Route path="/deck/new" element={<NewDeckPage setDeckName={setDeckName} />}/>
                        <Route path="/" element={<DeckIndexPage setDeckName={setDeckName} decks={decks} setDecks={setDecks}/>}/>
                        <Route path='/deckdetails/:id' element={< DeckDetailsPage setDeckName={setDeckName} deckName={deckName} cards={cards} setCards={setCards} />} />
                        <Route path='/managedeck/:id' element={< ManageDeckPage deckName={deckName} setDeckName={setDeckName} cards={cards} setCards={setCards} decks={decks} setDecks={setDecks} />} />
                        <Route path="/browse" element={<BrowseAllDecksPage />}/>
                    </Routes>
                </>
                :
                <AuthPage setUser={setUser}/>
                }
        </main>
    );
}

export default App;