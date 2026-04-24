import { Card, Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="p-4 shadow-sm">
            <h2 className="mb-3 text-center" style={{ color: "var(--chocolate)" }}>
              About Alishai's Cookies
            </h2>

            <p style={{ color: "var(--cookie-brown)" }}>
              Alishai’s Cookies began with a simple idea: that a truly great
              cookie can brighten someone’s day. What started as a small family
              passion has grown into a local favorite — a place where every batch
              is baked with care, creativity, and a whole lot of heart.
            </p>

            <p style={{ color: "var(--cookie-brown)" }}>
              We believe in doing things the right way. That means real
              ingredients, small‑batch baking, and recipes that have been refined
              through years of love and tradition. No shortcuts. No preservatives.
              Just honest, homemade goodness in every bite.
            </p>

            <p style={{ color: "var(--cookie-brown)" }}>
              Whether you’re stopping by for a classic chocolate chip, exploring
              our seasonal flavors, or picking up a box to share, we want every
              cookie to feel like a warm, familiar treat — the kind that brings
              people together and creates moments worth savoring.
            </p>

            <p
              className="mt-3 text-center"
              style={{ color: "var(--chocolate)", fontWeight: "600" }}
            >
              From our kitchen to your home — thank you for being part of our story.
            </p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
