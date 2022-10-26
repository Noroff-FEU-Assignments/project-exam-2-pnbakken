import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function GlobalNavBar() {
  return (
    <Navbar expand="lg" className="top-level-indent">
      <Navbar.Brand>Just Post</Navbar.Brand>
      <Navbar.Toggle aria-controls="global-nav-menu" />
      <Navbar.Collapse>
        <span className="ms-auto me-auto">SEARCH</span>
        <Nav className="ms-auto">
          <Link className="nav-link" to="/" exact>
            Home
          </Link>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default GlobalNavBar;
