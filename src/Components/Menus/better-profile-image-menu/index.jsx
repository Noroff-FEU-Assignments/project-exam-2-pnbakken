import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import BrandButton from "../../Buttons/brand-button";
import { Modal } from "react-bootstrap";
import BetterImageForm from "../../Forms/better-image-form";
import createAxios from "../../../Functions/create-axios";
import AuthContext from "../../../Context/auth-context";
import { USER_URL } from "../../../Constants";
import EditProfileImage from "../edit-profile-image";

function BetterProfileImageMenu({ user, handleRefresh }) {
  const [auth] = useContext(AuthContext);
  const [showAvatarForm, setShowAvatarForm] = useState(false);
  const handleShowAvatarForm = () => setShowAvatarForm(!showAvatarForm);

  const [showBannerForm, setShowBannerForm] = useState(false);
  const handleShowBannerForm = () => setShowBannerForm(!showBannerForm);

  const [avatarUrl, setAvatarUrl] = useState("");
  const [bannerUrl, setBannerUrl] = useState("");
  const [property, setProperty] = useState("");

  const mediaUrl = USER_URL + `/${auth.name}/media`;

  const removeImage = async (property) => {
    const client = createAxios(auth);

    try {
      await client.put(mediaUrl, { [property]: "" });
      handleRefresh();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="profile-image-menu flex-c full-width standard-component-width gap-lg">
      <div className="flex-r justify-between wrap align-center gap-md">
        <BrandButton onClick={handleShowAvatarForm}>Update avatar</BrandButton>
        <button className="system-button" onClick={() => removeImage("avatar")}>
          Remove avatar
        </button>
      </div>
      <div className="flex-r justify-between wrap align-center gap-md">
        <BrandButton onClick={handleShowBannerForm}>Update banner</BrandButton>
        <button className="system-button" onClick={() => removeImage("banner")}>
          Remove banner
        </button>
      </div>
      <Modal show={showAvatarForm} onHide={handleShowAvatarForm}>
        <EditProfileImage property="avatar" handleShow={handleShowAvatarForm} />
      </Modal>
      <Modal show={showBannerForm} onHide={handleShowBannerForm}>
        <EditProfileImage property="banner" handleShow={handleShowBannerForm} />
      </Modal>
    </div>
  );
}

BetterProfileImageMenu.propTypes = {
  user: PropTypes.object.isRequired,
  handleRefresh: PropTypes.func.isRequired,
};
export default BetterProfileImageMenu;
