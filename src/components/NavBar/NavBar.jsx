import {Link} from 'react-router-dom';
import * as userService from '../../utilities/users-service';
//import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar({user, setUser}) {

    function handleLogOut(){
        userService.logOut();
        setUser(null);
    }

    return (
        <Navbar bg="light" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand href="/">Get Flashed</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">My Decks</Nav.Link>
                        <Nav.Link href="/deck/new">Create Deck</Nav.Link>
                        <Nav.Link href="/browse">Browse All Decks</Nav.Link>
                        
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href={""} onClick={handleLogOut}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container> 
        </Navbar>
    )
    // return (
    //     <>
    //     <nav>
    //                     <Link to="/">My Decks</Link>
    //                     &nbsp; | &nbsp;
    //                     <Link to="/deck/new">Create Deck</Link>
    //                     &nbsp; | &nbsp;
    //                     <Link to="/browse">Browse All Decks</Link>
    //                     &nbsp; | &nbsp;
    //                     <Link to={""} onClick={handleLogOut}>Logout</Link>
    //     </nav>
    //     </>
    // )
}