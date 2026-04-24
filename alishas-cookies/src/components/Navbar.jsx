import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/Logo.jpeg';

function TopNavbar() {
  return (
    <Navbar bg="light" expand="lg" sticky="top" data-bs-theme="light" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
      
        <Navbar.Brand as={Link} to="/" style={{ paddingBottom: '0px', paddingTop: '0px' }}>
          <img src={logo} alt="Alishai's Cookies Logo" width="90" height="auto" className="d-inline-block align-top" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Order</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
  );
}

export default TopNavbar;
