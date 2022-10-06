import './App.css';
import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import {getUser} from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import DeckIndexPage from '../../pages/DeckIndexPage/DeckIndexPage';
import NewDeckPage from '../../pages/NewDeckPage/NewDeckPage';

function App() {
    // set the user by calling getUser function
    const [user, setUser] = useState(getUser());

    return (
        < main className="App">
                <>
                <NavBar user={user} setUser={setUser}/>
                    <Routes>
                        <Route path="/decks/new" element={<NewDeckPage/>}/>
                        <Route path="/mydecks" element={<DeckIndexPage/>}/>
                        <Route path="/auth" element={<AuthPage/>}/>
                    </Routes>
                </>

        </main>
    );
}

export default App;