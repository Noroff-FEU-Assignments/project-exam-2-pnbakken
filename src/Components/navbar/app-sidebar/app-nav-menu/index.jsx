import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../../Context/auth-context";
import BrandButton from "../../../Buttons/brand-button";

import "./index.style.scss";

import homeIcon from "../../../../assets/icon/icon-home.svg";
import editIcon from "../../../../assets/icon/icon-edit.svg";
import usersIcon from "../../../../assets/icon/icon-users.svg";
import ShowNewPostContext from "../../../../Context/show-new-post-context";
import NewPostButton from "../../../Buttons/new-post-button";

function AppNavMenu() {
  const [auth, setAuth] = useContext(AuthContext);
  const [showNewPost, setShowNewPost] = useContext(ShowNewPostContext);

  return (
    <div className="app-nav-menu flex-c full-width align-center p-3 gap-sm">
      <div className="app-nav-links flex-c full-width gap-xs">
        <Link to="/home" className="flex-c align-center small-text full-width">
          <img src={homeIcon} alt="home" />
          <span>Home</span>
        </Link>
        <Link to="/users" className="flex-c align-center small-text full-width">
          <img src={usersIcon} alt="users" />
          <span>Users</span>
        </Link>
        <Link
          to={`/user/${auth.name}/settings`}
          className="flex-c align-center small-text full-width"
        >
          <img src={editIcon} alt="edit profile images" />
          <span>Profile Images</span>
        </Link>
      </div>
      <div>
        <NewPostButton />
      </div>
    </div>
  );
}

export default AppNavMenu;
