import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    if (imageUrl) {
      updateImage();
      handleShow(false);
    }
    //eslint-disable-next-line
  }, [imageUrl]);

  async function updateImage() {
    const client = createAxios(auth);

    try {
      await client.put(mediaUrl, { [property]: imageUrl });

      setRefresh(!refresh);
      handleShow();
      window.location.reload(); // For some reason my data refresh doesn't work here, so this is my inelegant fix
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
          <button type="button" className="system-button" onClick={updateImage}>
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
