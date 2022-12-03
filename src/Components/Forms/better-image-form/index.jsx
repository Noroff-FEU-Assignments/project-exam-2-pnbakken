import React, { useState } from "react";
import PropTypes from "prop-types";
import BootstrapForm from "../bootstrap-form";
import FileInput from "./file-input";
import BrandButton from "../../Buttons/brand-button";
import UrlInput from "./url-input";
import createAxios from "../../../Functions/create-axios";
import UserImageHistory from "./user-image-history";

import "./index.style.scss";
import Message from "../../Message/message";

/**
 * Uploads selected image file or checks typed image url and passes string to callback handler.
 * @param {Function} imageUrlHandler: state handler to receive checked and validated image url,
 * @param {Function}handleShow: optional function to close menu if displayed as part of a modal or dropdown
 * @param {String}edit: optional url string if editing already existing image url}
 * @returns JSX.Component
 */
function BetterImageForm({ imageUrlHandler, handleShow, edit = "" }) {
  //eslint-disable-next-line
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(null);

  async function handleImage(e) {
    setLoading(true);
    e.preventDefault();
    const urlInput = document.querySelector("#url-input");
    const fileInput = document.querySelector("#file-input");

    try {
      if (urlInput.value) {
        const url = urlInput.value;
        if (await validateImageUrl(url)) {
          setImageUrl(url);
          imageUrlHandler(url);
          handleShow();
        }
      } else if (fileInput.files[0]) {
        const url = await doUpload(fileInput.files[0]);
        if (url) {
          setImageUrl(url);
          imageUrlHandler(url);
          handleShow();
        }
      }
    } catch (error) {
      console.error(error);
      setFormError(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <BootstrapForm
      onSubmit={handleImage}
      className="better-add-image full-width flex-c"
    >
      <fieldset disabled={loading} className="p-4">
        <div className="inputs mb-4">
          <UrlInput
            resultHandler={setImageUrl}
            edit={edit ? edit : ""}
            className="mb-3"
          />
          <FileInput resultHandler={setImageUrl} className="mb-3" />
        </div>
        <div className="menu flex-r full-width wrap justify-between">
          {formError && <Message type="error">Something went wrong</Message>}
          <button type="button" onClick={handleShow}>
            Cancel
          </button>
          {!loading ? (
            <BrandButton type="submit">Confirm</BrandButton>
          ) : (
            <>Checking image</>
          )}
        </div>
        {/*imageUrl && <SelectedImageDisplay image={imageUrl} />*/}
        <UserImageHistory handler={imageUrlHandler} endAction={handleShow} />
      </fieldset>
    </BootstrapForm>
  );
}

BetterImageForm.propTypes = {
  imageUrlHandler: PropTypes.func.isRequired,
  handleShow: PropTypes.func.isRequired,
  edit: PropTypes.string,
};

export default BetterImageForm;

async function validateImageUrl(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    if (result.status === 200) {
      return true;
    } else return false;
  } catch (error) {
    console.error(error);
    return false;
  }
}

async function doUpload(file) {
  const client = createAxios();
  const formData = new FormData();

  const preset = "rv4f402m";
  const cloud = "dt8j2ptfq";

  formData.append("file", file);
  formData.append("upload_preset", preset);

  try {
    const response = await client.post(
      `https://api.cloudinary.com/v1_1/${cloud}/image/upload`,
      formData
    );
    if (response.data.url) {
      return response.data.url;
    }
  } catch (error) {
    console.error(error);
  }
}
