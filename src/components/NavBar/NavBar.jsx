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
            <>
            <Link to="/">My Decks</Link>
            &nbsp; | &nbsp;
            <Link to="/deck/new">Create Deck</Link>
            &nbsp; | &nbsp;
            <Link to="/browse">Browse All Decks</Link>
            &nbsp; | &nbsp;
            <Link to={""} onClick={handleLogOut}>Logout</Link>
            </>
        </nav>
    )
}
