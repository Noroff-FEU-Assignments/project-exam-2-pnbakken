import React, { useState } from "react";
import { useContext } from "react";
import AuthContext from "../../../Context/auth-context";
import Follow from "../../Buttons/follow-user";
import ProfileImage from "../profile-image";
import PropTypes from "prop-types";

import "./index.style.scss";
import RefreshContext from "../../../Context/refresh-context";
import { Link } from "react-router-dom";

import editIcon from "../../../assets/icon/icon-edit.svg";
import UserSocial from "../user-social";
import ContactList from "../../Menus/contact-list";

function UserCard({ user, handleShowSocial, handleSocialSet }) {
  const [auth, isAuth] = useContext(AuthContext);
  const [refresh, setRefresh] = useContext(RefreshContext);
  const isOwner = auth ? auth.name === user.name : false;

  if (!user) {
    return <div className="user-card full-width"></div>;
  }
  return (
    <>
      <div
        className="user-card full-width flex-c justify-end"
        style={{ backgroundImage: `url(${user.banner ? user.banner : ""})` }}
      >
        <div className="user-info full-width flex-c align-center">
          <div className="full-width standard-component-width flex-r wrap justify-evenly align-end">
            <div className="flex-c align-center">
              <ProfileImage src={user.avatar} />
              <div className="user-name">{user.name}</div>
            </div>
            <div className="flex-r gap-sm">
              <UserSocial
                user={user}
                handleShow={handleShowSocial}
                handleSet={handleSocialSet}
              />
              {!isOwner ? (
                <Follow otherUser={user} />
              ) : (
                <Link
                  to={`/user/${auth && auth.name}/settings`}
                  className="flex-c align-center small-text full-width light-text"
                >
                  <img src={editIcon} alt="edit profile images" />
                  <span>Profile Images</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserCard;
