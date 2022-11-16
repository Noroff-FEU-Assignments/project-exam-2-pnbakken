import React, { useState } from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { useEffect } from "react";
import { USER_URL } from "../../../Constants";
import AuthContext from "../../../Context/auth-context";
import { HistoryProvider } from "../../../Context/history-context";
import RefreshContext from "../../../Context/refresh-context";
import createAxios from "../../../Functions/create-axios";
import AddImageForm from "../../Forms/add-image-form";
import BetterImageForm from "../../Forms/better-image-form";

import "./index.style.scss";

function EditProfileImage({ handleShow, property, current = "" }) {
  const [auth, setAuth] = useContext(AuthContext);
  const [refresh, setRefresh] = useContext(RefreshContext);
  const mediaUrl = USER_URL + `/${auth.name}/media`;
  const [imageUrl, setImageUrl] = useState(current);
  const [showImageForm, setShowImageForm] = useState(true);
  const handleShowImageForm = () => setShowImageForm(!showImageForm);
  async function updateImage() {
    const client = createAxios(auth);

    try {
      const response = await client.put(mediaUrl, { [property]: imageUrl });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="flex-column full-width">
      {showImageForm && (
        <div>
          <HistoryProvider>
            <BetterImageForm
              imageUrlHandler={setImageUrl}
              handleShow={handleShowImageForm}
            />
          </HistoryProvider>
        </div>
      )}
      <div>
        {imageUrl && imageUrl !== current ? (
          <button type="button" onClick={updateImage}>
            Update
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

EditProfileImage.propTypes = {
  handleShow: PropTypes.func,
  property: PropTypes.string.isRequired,
  current: PropTypes.string,
};

export default EditProfileImage;
