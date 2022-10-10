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

    return (
        < main className="App">
            {user ?
                <>
                    <NavBar user={user} setUser={setUser}/>
                    <Routes>
                        <Route path="/deck/new" element={<NewDeckPage />}/>
                        <Route path="/" element={<DeckIndexPage />}/>
                        {/* below: WILL NEED ID ADDED TO PATH */}
                        <Route path='/deckdetails' element={< DeckDetailsPage/>} />
                        <Route path='/managedeck' element={< ManageDeckPage/>} />
                    </Routes>
                </>
                :
                <AuthPage setUser={setUser}/>
                }
        </main>
    );
}

export default App;