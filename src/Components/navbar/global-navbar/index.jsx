import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../Context/auth-context";
import LogoutButton from "../../Buttons/logout-button";

function GlobalNavBar() {
  const [auth, setAuth] = useContext(AuthContext);
  return (
    <Navbar expand="lg" className="top-level-indent" variant="dark">
      <NavLink to={auth ? "/home" : "/"}>
        <Navbar.Brand>Just Post</Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="global-nav-menu" />
      <Navbar.Collapse id="global-nav-menu">
        <span className="ms-auto me-auto">SEARCH</span>
        <Nav className="ms-auto">
          <NavLink className="nav-link" to="/" exact="true">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
          {auth ? (
            <LogoutButton />
          ) : (
            <NavLink className="nav-link" to="/login">
              Log In
            </NavLink>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default GlobalNavBar;
