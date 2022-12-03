import React, { useState } from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import { USER_URL } from "../../../Constants";
import AuthContext from "../../../Context/auth-context";
import { HistoryProvider } from "../../../Context/history-context";
import RefreshContext from "../../../Context/refresh-context";
import createAxios from "../../../Functions/create-axios";
import BetterImageForm from "../../Forms/better-image-form";

import "./index.style.scss";

function EditProfileImage({ handleShow, property, current = "" }) {
  //eslint-disable-next-line
  const [auth, setAuth] = useContext(AuthContext);
  const [refresh, setRefresh] = useContext(RefreshContext);
  const mediaUrl = USER_URL + `/${auth.name}/media`;
  const [imageUrl, setImageUrl] = useState(current);

  async function updateImage() {
    const client = createAxios(auth);

    try {
      await client.put(mediaUrl, { [property]: imageUrl });

      setRefresh(!refresh);
      handleShow();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="edit-image-form flex-c full-width">
      <div>
        <HistoryProvider>
          <BetterImageForm
            imageUrlHandler={setImageUrl}
            handleShow={handleShow}
          />
        </HistoryProvider>
      </div>

      <div className="flex-row justify-between">
        {imageUrl && imageUrl !== current ? (
          <button type="button" onClick={updateImage}>
            Update
          </button>
        ) : (
          <span></span>
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
