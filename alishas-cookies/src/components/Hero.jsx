import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  const handleExploreMenu = () => {
    navigate("/menu");
  };

  return (
    <div className="hero-banner d-flex align-items-center">
      <Container className="text-center">
        <h1 className="hero-title">Alishai's Cookies</h1>
        <p className="hero-subtitle">
          Freshly baked. Handcrafted. Made with love.
        </p>
        <Button className="btn-primary hero-btn" size="lg" onClick={handleExploreMenu}>
          Explore Our Menu
        </Button>
      </Container>
    </div>
  );
}

export default Hero;
