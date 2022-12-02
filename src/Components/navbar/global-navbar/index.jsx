import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import AuthContext from "../../../Context/auth-context";
import LogoutButton from "../../Buttons/logout-button";
import UserSearch from "../../Menus/search-users";

function GlobalNavBar() {
  const [auth, setAuth] = useContext(AuthContext);
  return (
    <Navbar expand="lg" className="top-level-indent" variant="dark">
      <NavLink to={auth ? "/home" : "/"}>
        <Navbar.Brand>Just Post</Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="global-nav-menu" />
      <Navbar.Collapse id="global-nav-menu">
        {auth && (
          <div>
            <UserSearch />
          </div>
        )}
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
