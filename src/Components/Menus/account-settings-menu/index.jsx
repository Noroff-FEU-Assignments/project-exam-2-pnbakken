import React, { useContext } from "react";
import { useState } from "react";
import EditProfileImage from "../edit-profile-image";
import PropTypes from "prop-types";
import createAxios from "../../../Functions/create-axios";
import AuthContext from "../../../Context/auth-context";
import RefreshContext from "../../../Context/refresh-context";
import { USER_URL } from "../../../Constants";

function AccountSettingsMenu({ user }) {
  //eslint-disable-next-line
  const [auth, setAuth] = useContext(AuthContext);
  const [refresh, setRefresh] = useContext(RefreshContext);
  const [showEditProfileAvatar, setShowEditProfileAvatar] = useState(false);
  const handleShowEditProfileAvatar = () =>
    setShowEditProfileAvatar(!showEditProfileAvatar);

  const [showEditProfileBanner, setShowEditProfileBanner] = useState(false);
  const handleShowEditProfileBanner = () =>
    setShowEditProfileBanner(!showEditProfileBanner);

  const mediaUrl = USER_URL + `/${auth.name}/media`;

  async function removeImage(property) {
    const client = createAxios(auth);

    try {
      await client.put(mediaUrl, { [property]: "" });
      setRefresh(!refresh);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="account-settings-menu full-width large-component-width">
      <ul className="flex-c full-width standard-component-width gap-md no-list-style">
        <li className="menu-item flex-row full-width">
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
          <button
            className="system-button"
            onClick={() => {
              removeImage("avatar");
            }}
          >
            Remove avatar
          </button>
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
          <button
            className="system-button"
            onClick={() => {
              removeImage("banner");
            }}
          >
            Remove banner
          </button>
        </li>
      </ul>
    </div>
  );
}

AccountSettingsMenu.propTypes = {
  user: PropTypes.object.isRequired,
};

export default AccountSettingsMenu;
