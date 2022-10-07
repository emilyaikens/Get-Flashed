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
                <>
                    {/* <NavBar user={user} setUser={setUser} /> */}
                    <h1>hello</h1>
                    <Routes>
                        <Route path="/deck/new" element={<NewDeckPage user={user}/>}/>
                        <Route path="/mydecks" element={<DeckIndexPage user={user}/>}/>
                        <Route AuthPage path="/auth" element={<AuthPage setUser={setUser}/>}/>
                    </Routes>
                    
                </>
        </main>
    );
}

export default App;