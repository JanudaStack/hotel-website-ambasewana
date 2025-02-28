import logo from '../assets/logo/logo-1.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <div className="bg-img"></div>
            <Navbar expand="lg" className="bg-transparent">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="logo" width={'120px'} />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto nav-items">
                            <Nav.Link href="#home">About Us</Nav.Link>
                            <Nav.Link href="#link">
                                Rooms & Accomodation
                            </Nav.Link>
                            <Nav.Link href="#link">
                                Restaurant & Dining
                            </Nav.Link>
                            <Nav.Link href="#link">Events & Functions</Nav.Link>
                            <Nav.Link href="#link">Gallery</Nav.Link>
                            <Nav.Link href="#link">Locate Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;
