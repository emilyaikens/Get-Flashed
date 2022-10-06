import './App.css';
import {useState} from 'react';
import {Routes, Route} from 'react-router-dom';
import {getUser} from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import NewDeckPage from '../NewDeckPage/NewDeckPage';
import DeckIndexPage from '../DeckIndexPage/DeckIndexPage';

function App() {
    // set the user by calling getUser function
    const [user, setUser] = useState(getUser());

    return (
        < main className="App">
            {user ?
                <>
                    <NavBar user={user} setUser={setUser}/>
                    <Routes>
                        <Route path="/deck/new" element={<NewDeckPage/>}/>
                        <Route path="/mydecks" element={<DeckIndexPage/>}/>
                    </Routes>
                </>
                :
                <AuthPage setUser={setUser}/>
                }
        </main>
    );
}

export default App;