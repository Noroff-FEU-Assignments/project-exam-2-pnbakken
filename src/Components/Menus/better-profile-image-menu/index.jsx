import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import BrandButton from "../../Buttons/brand-button";
import { Modal } from "react-bootstrap";
import BetterImageForm from "../../Forms/better-image-form";
import createAxios from "../../../Functions/create-axios";
import AuthContext from "../../../Context/auth-context";
import { USER_URL } from "../../../Constants";

function BetterProfileImageMenu({ user, handleRefresh }) {
  const [auth] = useContext(AuthContext);
  const [showImageForm, setShowImageForm] = useState(false);
  const handleShowImageForm = () => setShowImageForm(!showImageForm);
  const [avatarUrl, setAvatarUrl] = useState("");
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
    <div className="profile-image-menu flex-c full-width large-component-width gap-lg">
        <div>
            <BetterImage
        </div>
    </div>
  );
}

BetterProfileImageMenu.propTypes = {
  user: PropTypes.object.isRequired,
  handleRefresh: PropTypes.func.isRequired,
};
export default BetterProfileImageMenu;
