import React, { useState } from "react";
import { useContext } from "react";
import AuthContext from "../../../Context/auth-context";
import Follow from "../../Buttons/follow-user";
import ProfileImage from "../profile-image";
import PropTypes from "prop-types";

import "./index.style.scss";
import RefreshContext from "../../../Context/refresh-context";

function UserCard({ user }) {
  const [auth, isAuth] = useContext(AuthContext);
  const [refresh, setRefresh] = useContext(RefreshContext);
  const isOwner = auth ? auth.name === user.name : false;
  console.log("Is owner: " + isOwner);

  const [showMenu, setShowMenu] = useState(false);
  const handleShowMenu = () => setShowMenu(!showMenu);

  if (!user) {
    return <div className="user-card full-width"></div>;
  }
  return (
    <div
      className="user-card full-width flex-c justify-end"
      style={{ backgroundImage: `url(${user.banner ? user.banner : ""})` }}
    >
      <div className="user-info full-width flex-c align-center">
        <div className="full-width standard-component-width flex-r wrap justify-evenly align-end">
          <div
            className="flex-c align-center"
            onMouseEnter={handleShowMenu}
            onMouseLeave={handleShowMenu}
          >
            <ProfileImage src={user.avatar} />
            <div className="user-name">{user.name}</div>
          </div>
          <div className="flex-r gap-sm">
            <div className="flex-c align-center">
              <div>{user._count.followers}</div>
              <div>Followers</div>
            </div>
            <div className="flex-c align-center">
              <div>{user._count.following}</div>
              <div>Following</div>
            </div>
            {!isOwner && <Follow user={user} />}
          </div>
        </div>
      </div>
    </div>
  );
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserCard;
