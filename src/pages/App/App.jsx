import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import {getUser} from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import DeckIndexPage from '../DeckIndexPage/DeckIndexPage';
import DeckDetailsPage from '../DeckDetailsPage/DeckDetailsPage';
import ManageDeckPage from '../ManageDeckPage/ManageDeckPage';
import BrowseAllDecksPage from '../BrowseAllDecksPage/BrowseAllDecksPage';
import './App.css';

function App() {

    const [user, setUser] = useState(getUser());
    const [decks, setDecks] = useState([]);
    const [deckName, setDeckName] = useState([]);
    const [cards, setCards] = useState([]);

    return (
        < main className="App">
            {user ?
                <>
                    <NavBar setUser={setUser}/>
                    <Routes>
                        <Route path="/" element={<DeckIndexPage setDeckName={setDeckName} decks={decks} setDecks={setDecks}/>}/>
                        <Route path='/deckdetails/:id' element={< DeckDetailsPage user={user} setDeckName={setDeckName} deckName={deckName} cards={cards} setCards={setCards} />} />
                        <Route path='/managedeck/:id' element={< ManageDeckPage deckName={deckName} setDeckName={setDeckName} cards={cards} setCards={setCards} user={user}/>} />
                        <Route path="/browse" element={<BrowseAllDecksPage />}/>
                    </Routes>
                </>
                :
                <AuthPage setUser={setUser}/>
                }
        </main>
    );
};

export default App;