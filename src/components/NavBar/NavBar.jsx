import * as userService from '../../utilities/users-service';
import './NavBar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar({setUser}) {

//on click handle log out and setUser to null

    function handleLogOut(){
        userService.logOut();
        setUser(null);
    }

    return (
        <Navbar bg="" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand style={{fontFamily:'Peralta'}} href="/">Get Flashed</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">My Decks</Nav.Link>
                        <Nav.Link href="/browse">Browse All Decks</Nav.Link>
                        
                    </Nav>
                    <Nav className="ml-auto">
                        <Nav.Link href={""} onClick={handleLogOut}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container> 
        </Navbar>
    )
}