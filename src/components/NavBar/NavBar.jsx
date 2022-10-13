import {Link} from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({user, setUser}) {

    function handleLogOut(){
        userService.logOut();
        setUser(null);
    }

    return (
        <nav>
            {user ?
            <>
            <Link to="/">My Decks</Link>
            &nbsp; | &nbsp;
            <Link to="/deck/new">Create Deck</Link>
            &nbsp; | &nbsp;
            {/* <span>Welcome, {user.name}</span> */}
            &nbsp;&nbsp; <Link to={""} onClick={handleLogOut}>Logout</Link>
            </>
            : 
            <Link to="/auth">Login or Sign Up</Link>
            }
        </nav>
    )
}
