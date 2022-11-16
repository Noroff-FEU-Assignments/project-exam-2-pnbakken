import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import BootstrapForm from "../bootstrap-form";
import { Form } from "react-bootstrap";
import SelectedImageDisplay from "./selectedImageDisplay";
import FileInput from "./file-input";
import BrandButton from "../../Buttons/brand-button";
import UrlInput from "./url-input";
import createAxios from "../../../Functions/create-axios";
import { cloneElement } from "react";

/**
 * Uploads selected image file or checks typed image url and passes string to callback handler.
 * @param {Function} imageUrlHandler: state handler to receive checked and validated image url,
 * @param {Function}handleShow: optional function to close menu if displayed as part of a modal or dropdown
 * @param {String}edit: optional url string if editing already existing image url}
 * @returns JSX.Component
 */
function BetterImageForm({ imageUrlHandler, handleShow, edit = "" }) {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState(null);

  async function handleImage(e) {
    setLoading(true);
    e.preventDefault();
    console.log("Validating image selection");
    const urlInput = document.querySelector("#url-input");
    const fileInput = document.querySelector("#file-input");

    try {
      if (fileInput.files[0]) {
        const url = await doUpload(fileInput.files[0]);
        if (url) {
          setImageUrl(url);
        }
      } else if (urlInput.value) {
        const url = urlInput.value;
        if (await validateImageUrl(url)) {
          setImageUrl(url);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);

      if (imageUrl) {
        console.log("Has image url");
        imageUrlHandler(imageUrl);
        handleShow();
        console.log("Image handled");
      }
    }
  }

  return (
    <div className="better-add-image full-width flex-column p-3">
      <BootstrapForm onSubmit={handleImage}>
        <fieldset disabled={loading}>
          <div className="inputs">
            <UrlInput resultHandler={setImageUrl} edit={edit ? edit : ""} />
            <FileInput resultHandler={setImageUrl} />
          </div>
          <div className="menu flex-row full-width wrap justify-between">
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
        </fieldset>
      </BootstrapForm>
    </div>
  );
}

BetterImageForm.propTypes = {
  imageUrlHandler: PropTypes.func.isRequired,
  handleShow: PropTypes.func,
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
  formData.append("file", file);
  formData.append("upload_preset", "rv4f402m");
  const cloud = "dt8j2ptfq";
  try {
    const response = await client.post(
      `https://api.cloudinary.com/v1_1/${cloud}/image/upload`,
      formData
    );
    console.log(response);
    if (response.status === 200) {
      return response.data.url;
    }
  } catch (error) {
    console.error(error);
  }
}
