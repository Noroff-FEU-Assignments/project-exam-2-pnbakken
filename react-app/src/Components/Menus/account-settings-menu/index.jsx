import React from "react";
import { useState } from "react";
import EditProfileImage from "../edit-profile-image";
import PropTypes from "prop-types";

function AccountSettingsMenu({ user }) {
  const [showEditProfileAvatar, setShowEditProfileAvatar] = useState(false);
  const handleShowEditProfileAvatar = () =>
    setShowEditProfileAvatar(!showEditProfileAvatar);

  const [showEditProfileBanner, setShowEditProfileBanner] = useState(false);
  const handleShowEditProfileBanner = () =>
    setShowEditProfileBanner(!showEditProfileBanner);

  return (
    <div className="account-settings-menu full-width">
      <ul className="flex-column full-width standard-component-width gap-md no-list-style">
        <li className="menu-item full-width">
          <button className="discrete" onClick={handleShowEditProfileAvatar}>
            Edit Profile Image
          </button>
          {showEditProfileAvatar && (
            <div>
              <EditProfileImage
                handleShow={handleShowEditProfileAvatar}
                property="avatar"
                current={user.avatar}
              />
            </div>
          )}
        </li>
        <li className="menu-item full-width">
          <button className="discrete" onClick={handleShowEditProfileBanner}>
            Edit Banner Image
          </button>
          {showEditProfileBanner && (
            <div>
              <EditProfileImage
                handleShow={showEditProfileBanner}
                property="banner"
                current={user.banner}
              />
            </div>
          )}
        </li>
      </ul>
    </div>
  );
}

AccountSettingsMenu.propTypes = {
  user: PropTypes.object.isRequired,
};

export default AccountSettingsMenu;
