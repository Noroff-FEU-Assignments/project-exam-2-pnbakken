import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../../Context/auth-context";

function AppNavMenu() {
  const [auth, setAuth] = useContext(AuthContext);
  return (
    <div className="app-navmenu flex-column align-center">
      <Link to="/home">Home</Link>
      <Link to="/users">Users</Link>
      <Link to={`/users/${auth.name}/settings`}>Account Settings</Link>
    </div>
  );
}

export default AppNavMenu;
