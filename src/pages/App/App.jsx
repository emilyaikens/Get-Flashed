import './App.css';
import {useState} from 'react';
// Import the following components
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import {Routes, Route} from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import {getUser} from '../../utilities/users-service';

function App() {
    // set the user by calling getUser function
    const [user, setUser] = useState(getUser());

    return (
        < main className="App">
                <>
                <NavBar user={user} setUser={setUser}/>
                    <Routes>
                        <Route path="/orders/new" element={<NewOrderPage/>}/>
                        <Route path="/orders" element={<OrderHistoryPage/>}/>
                        <Route path="/auth" element={<AuthPage/>}/>
                    </Routes>
                </>

        </main>
    );
}

export default App;