import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../../Context/auth-context";
import BrandButton from "../../../Buttons/brand-button";

import "./index.style.scss";

import homeIcon from "../../../../assets/icon/icon-home.svg";

import usersIcon from "../../../../assets/icon/icon-users.svg";
import ShowNewPostContext from "../../../../Context/show-new-post-context";
import NewPostButton from "../../../Buttons/new-post-button";
import useWindowSize from "../../../../Hooks/use-window-size";

function AppNavMenu() {
  const [auth, setAuth] = useContext(AuthContext);
  const [showNewPost, setShowNewPost] = useContext(ShowNewPostContext);
  const windowSize = useWindowSize();
  return (
    <div className="app-nav-menu flex-c full-width align-center gap-sm">
      <div className="app-nav-links flex-c align-center full-width gap-xs">
        <Link to="/home" className="flex-c align-center small-text full-width">
          <img src={homeIcon} alt="home" />
          <span>Home</span>
        </Link>
        <Link to="/users" className="flex-c align-center small-text full-width">
          <img src={usersIcon} alt="users" />
          <span>Users</span>
        </Link>
        <div className="flex-c align-center small-text">
          <NewPostButton />
          {windowSize.innerWidth <= 991 && <span>Post</span>}
        </div>
      </div>
    </div>
  );
}

export default AppNavMenu;
