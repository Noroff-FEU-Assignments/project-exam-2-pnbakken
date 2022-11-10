import React from "react";
import { useContext } from "react";
import AuthContext from "../../../Context/auth-context";
import Follow from "../../Buttons/follow-user";
import ProfileImage from "../profile-image";

import "./index.style.scss";

function UserCard({ user }) {
  const [auth, isAuth] = useContext(AuthContext);
  const isOwner = auth ? auth.name === user.name : false;
  console.log("Is owner: " + isOwner);
  return (
    <div
      className="user-card full-width flex-column justify-end"
      style={{ backgroundImage: user.banner ? user.banner : "" }}
    >
      <div className="user-info full-width flex-row wrap justify-evenly align-end">
        <div className="flex-column align-center">
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
  );
}

export default UserCard;
