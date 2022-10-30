import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import AuthContext from "../../../Context/auth-context";

import "./index.style.scss";

function LogoutButton() {
  const [auth, setAuth] = useContext(AuthContext);
  function logout() {
    setAuth(null);
  }
  return (
    <button className="logout-button" onClick={logout}>
      Log Out
    </button>
  );
}

export default LogoutButton;
