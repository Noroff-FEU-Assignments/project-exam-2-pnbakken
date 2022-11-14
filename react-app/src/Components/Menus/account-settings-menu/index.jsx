import React from "react";
import { useState } from "react";
import EditProfileImage from "../edit-profile-image";

function AccountSettingsMenu() {
  const [showEditProfileImage, setShowEditProfileImage] = useState(false);
  const handleShowEditProfileImage = () =>
    setShowEditProfileImage(!showEditProfileImage);

  const [showEditProfileBanner, setShowEditProfileBanner] = useState(false);
  const handleShowEditProfileBanner = () => console.log("click");

  return (
    <div className="account-settings-menu full-width">
      <ul className="flex-column full-width standard-component-width gap-md">
        <li className="menu-item full-width">
          {showEditProfileImage ? (
            <EditProfileImage handleShow={handleShowEditProfileImage} />
          ) : (
            <button className="discrete" onClick={handleShowEditProfileImage}>
              Edit Profile Image
            </button>
          )}
        </li>
        <li className="menu-item full-width">
          <button className="discrete">Edit Banner Image</button>
        </li>
      </ul>
    </div>
  );
}

export default AccountSettingsMenu;
