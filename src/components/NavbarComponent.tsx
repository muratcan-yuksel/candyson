import React from "react";
import {
  Navbar,
  Container,
  Nav
} from "react-bootstrap";
import "../styles/navbar.css";
import navIcon from "../assets/icon.gif";

const NavbarComponent = () => {
  return (
    <div id="navbarComponent">
      <Navbar id="navbarStyling" bg="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand id="navbarTitle" href="#landingComponent">
            {" "}
            {/* Grumpy Gorilla Gang */}
            <div id="navbarLogoContainer">
              <img src={navIcon} alt="" id="navbarLogo" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle id="menuBtn" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="navText" href="#landingComponent">
                Home
              </Nav.Link>
              <Nav.Link className="navText" href="#bannerComponent">
                Mint
              </Nav.Link>
              <Nav.Link className="navText" href="#roadmapComponent">
                Roadmap
              </Nav.Link>
              <Nav.Link className="navText" href="#faqContainer">
                FAQ
              </Nav.Link>
              <Nav.Link className="navText" href="#aboutComponent">
                About us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* <Navbar id="navbarStyling" bg="dark" expand={false} fixed="top">
        <Container fluid>
          <Navbar.Brand id="navbarTitle" href="#">
            Grumpy Gorilla Gang
          </Navbar.Brand>
          <Navbar.Toggle id="menuBtn" aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Grumpy Gorilla Gang
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#landingComponent">Home</Nav.Link>
                <Nav.Link href="#roadmapContainer">Roadmap</Nav.Link>
                <Nav.Link href="#aboutComponent">About us</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar> */}
    </div>
  );
};

export default NavbarComponent;
