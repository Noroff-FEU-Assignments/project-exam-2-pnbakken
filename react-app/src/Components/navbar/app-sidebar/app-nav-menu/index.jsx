import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../../Context/auth-context";

import "./index.style.scss";

import homeIcon from "../../../../assets/icon/icon-home.svg";
import BrandButton from "../../../Buttons/brand-button";

function AppNavMenu() {
  const [auth, setAuth] = useContext(AuthContext);
  return (
    <div className="app-nav-menu flex-col align-center p-3">
      <Link to="/home">
        <img src={homeIcon} alt="home" />
      </Link>
      <Link to="/users">Users</Link>
      <Link to={`/user/${auth.name}/settings`}>Account Settings</Link>
      <BrandButton>Post</BrandButton>
    </div>
  );
}

export default AppNavMenu;
