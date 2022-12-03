import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../Context/auth-context";
import LogoutButton from "../../Buttons/logout-button";

import logo from "../../../assets/image/logo.png";
import logoSm from "../../../assets/image/logo-sm.png";
import useWindowSize from "../../../Hooks/use-window-size";

function GlobalNavBar() {
  //eslint-disable-next-line
  const [auth, setAuth] = useContext(AuthContext);
  const windowSize = useWindowSize();

  return (
    <Navbar expand="lg" className="top-level-indent" variant="dark">
      <NavLink to={auth ? "/home" : "/"}>
        <Navbar.Brand>
          <img
            src={windowSize.innerWidth > 991 ? logo : logoSm}
            alt="just-post logo"
          />
        </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="global-nav-menu" />
      <Navbar.Collapse id="global-nav-menu">
        <Nav className="ms-auto">
          <NavLink className="nav-link" to={auth ? "/home" : "/"} end>
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
