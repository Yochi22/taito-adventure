import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

export function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container className='#navbar-container'>
        <Navbar.Brand href="/" className='title-navbar'>
          <img src={logo} alt="Logo" className="navbar-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#timeline">HOME</Nav.Link>
            <Nav.Link href="#cancion">ABOUT US</Nav.Link>
            <Nav.Link eventKey={2} href="#todolist">
              GALLERY
            </Nav.Link>
            <Nav.Link href="#cancion">TOURS</Nav.Link>
            <Nav.Link href="#cancion">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
