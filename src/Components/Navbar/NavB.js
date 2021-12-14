import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import menu from "../../assets/img/menu.png";
import logo from "../../assets/img/logo.svg";

function NavB() {
  return (
    <>
      <Navbar
        variant="light"
        bg="white"
        className="NavConteiner"
        collapseOnSelect
        sticky="top"
      >
        <Container className="NavInnerCon">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              width="180vw"
              // height="30vh"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          <Nav>
            <Nav.Link href="#" style={{ fontSize: "x-small" }}>
              222.555.5555
            </Nav.Link>
            <Nav.Link eventKey={2} href="#" style={{ fontSize: "x-small" }}>
              LOGIN
            </Nav.Link>
            <Nav.Link
              eventKey={2}
              href="#"
              className="hamburgerNav"
              style={{ fontSize: "small" }}
            >
              <img src={menu} alt="-" />
              {/* <GiHamburgerMenu /> */}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
export default NavB;
