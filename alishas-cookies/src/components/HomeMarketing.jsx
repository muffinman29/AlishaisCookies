import { Card, Container, Row, Col } from "react-bootstrap";

function HomeMarketing() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 text-center shadow-sm">
            <h2 className="mb-3" style={{ color: "var(--chocolate)" }}>
              Welcome to Alishai's Cookies
            </h2>
            <p style={{ color: "var(--cookie-brown)" }}>
              Where every bite feels like home. At Alishai’s Cookies, we believe
              great cookies do more than satisfy a craving — they create
              moments. Whether it’s the comfort of a warm chocolate chip cookie
              after a long day or the joy of sharing a box with someone you
              love, our treats are crafted to bring people together.
            </p>
            <p style={{ color: "var(--cookie-brown)" }}>
              We bake in small batches using real ingredients, time‑honored
              techniques, and a whole lot of heart. No shortcuts. No
              preservatives. Just pure, homemade goodness in every crumb.
            </p>
            <p style={{ color: "var(--chocolate)", fontWeight: "600" }}>
              Fresh. Handcrafted. Unforgettable.  
              <br />
              That’s the Alishai’s Cookies promise.
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default HomeMarketing;
