import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HomePage() {
  return (
    <Navbar  sticky="top" bg="black" variant="dark">
    <Container >
      <Navbar.Brand href="#logo">
      <img
              alt=""
              src="/logo.png"
              width="100"
              height="30"
              className="d-inline-block align-top"
            />
            </Navbar.Brand>
            <Navbar.Brand href="#logo-name">
            Cleaning Site
            </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact Us</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#phone-number">Phone Number</Nav.Link>
          <Nav.Link eventKey={2} href="#number">
            <button>+977 9843357731</button>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default HomePage