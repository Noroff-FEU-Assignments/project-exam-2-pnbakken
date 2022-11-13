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
      className="user-card full-width flex-column justify-end"
      style={{ backgroundImage: user.banner ? user.banner : "" }}
    >
      <div className="user-info full-width flex-column align-center">
        <div className="full-width standard-component-width flex-row wrap justify-evenly align-end">
          <div
            className="flex-column align-center"
            onMouseEnter={handleShowMenu}
            onMouseLeave={handleShowMenu}
          >
            <ProfileImage src={user.avatar} />
            <div>{user.name}</div>
          </div>
          <div className="flex-row gap-sm">
            <div className="flex-column align-center">
              <div>{user._count.followers}</div>
              <div>Followers</div>
            </div>
            <div className="flex-column align-center">
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
