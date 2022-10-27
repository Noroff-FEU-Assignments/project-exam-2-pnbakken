import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function GlobalNavBar() {
  return (
    <Navbar expand="lg" className="top-level-indent" variant="dark">
      <NavLink to="/">
        <Navbar.Brand>Just Post</Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="global-nav-menu" />
      <Navbar.Collapse id="global-nav-menu">
        <span className="ms-auto me-auto">SEARCH</span>
        <Nav className="ms-auto">
          <NavLink className="nav-link" to="/" exact>
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
          <NavLink className="nav-link" to="/login">
            Log In
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default GlobalNavBar;
