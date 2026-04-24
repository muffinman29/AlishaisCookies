import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer mt-5 py-4">
      <Container>
        <Row className="text-center text-md-start">
          <Col md={4} className="mb-3">
            <h5 className="footer-title">Alishai's Cookies</h5>
            <p className="footer-text">
              Freshly baked, handcrafted cookies made with love.  
              Bringing sweetness to every moment.
            </p>
          </Col>

          <Col md={4} className="mb-3">
            <h6 className="footer-subtitle">Quick Links</h6>
            <ul className="list-unstyled footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/menu" className="footer-link">Menu</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/contact" className="footer-link">Contact Us</Link></li>
            </ul>
          </Col>

          <Col md={4} className="mb-3">
            <h6 className="footer-subtitle">Get in Touch</h6>
            <p className="footer-text">alishaiscookies26@gmail.com</p>
            <p className="footer-text">(228) 679-9201</p>
          </Col>
        </Row>

        <Row className="text-center mt-3">
          <Col>
            <p className="footer-copy">
              © {new Date().getFullYear()} Alishai's Cookies — All Rights Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
