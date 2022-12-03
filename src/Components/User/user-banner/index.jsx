import React from "react";
import { useContext } from "react";
import AuthContext from "../../../Context/auth-context";
import Follow from "../../Buttons/follow-user";
import ProfileImage from "../profile-image";
import PropTypes from "prop-types";

import "./index.style.scss";
import { Link } from "react-router-dom";

import editIcon from "../../../assets/icon/icon-edit.svg";
import UserSocial from "../user-social";

import defaultBanner from "../../../assets/image/default-banner.png";

function UserBanner({ user, handleShowSocial, handleSocialSet }) {
  //eslint-disable-next-line
  const [auth, isAuth] = useContext(AuthContext);
  const isOwner = auth ? auth.name === user.name : false;

  if (!user) {
    return <div className="user-banner full-width"></div>;
  }
  return (
    <>
      <div
        className="user-banner full-width flex-c justify-end radius-md"
        style={{
          backgroundImage: `url(${user.banner ? user.banner : defaultBanner})`,
        }}
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

UserBanner.propTypes = {
  user: PropTypes.object.isRequired,
  handleShowSocial: PropTypes.func,
  handleSocialSet: PropTypes.func,
};

export default UserBanner;
