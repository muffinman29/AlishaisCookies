import React from 'react';
import { Card, Container, Row, Col } from "react-bootstrap";

class Contact extends React.Component {
  render() {
    return (
      <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow-sm">
            <h2 className="mb-3 text-center" style={{ color: "var(--chocolate)" }}>
              Order Alishai's Cookies
            </h2>

            <p style={{ color: "var(--cookie-brown)" }}>
              To place an order, please call or email us.
            </p>

            <p style={{ color: "var(--cookie-brown)" }}>              
              Phone: (228) 679-9201
              <br></br>
              Email: <a href="mailto:alishaiscookies26@gmail.com">alishaiscookies26@gmail.com</a>
            </p>

            <p
              className="mt-3 text-center"
              style={{ color: "var(--chocolate)", fontWeight: "600" }}
            >
              We look forward to baking for you!
            </p>
          </Card>
        </Col>
      </Row>
    </Container>      
    );
  }
}

export default Contact;
