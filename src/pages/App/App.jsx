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

function App() {
    // set the user by calling getUser function
    const [user, setUser] = useState(getUser());
    const [deck, setDeck] = useState([]);

    return (
        < main className="App">
            {user ?
                <>
                    <NavBar user={user} setUser={setUser}/>
                    <Routes>
                        <Route path="/deck/new" element={<NewDeckPage setDeck={setDeck} />}/>
                        <Route path="/" element={<DeckIndexPage />}/>
                        <Route path='/deckdetails/:id' element={< DeckDetailsPage/>} />
                        <Route path='/managedeck/:id' element={< ManageDeckPage deck={deck} />} />
                    </Routes>
                </>
                :
                <AuthPage setUser={setUser}/>
                }
        </main>
    );
}

export default App;