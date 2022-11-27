import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import BootstrapForm from "../bootstrap-form";
import { Form } from "react-bootstrap";
import SelectedImageDisplay from "./selectedImageDisplay";
import FileInput from "./file-input";
import BrandButton from "../../Buttons/brand-button";
import UrlInput from "./url-input";
import createAxios from "../../../Functions/create-axios";
import UserImageHistory from "./user-image-history";

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
      if (urlInput.value) {
        console.log("Prioritise url");
        const url = urlInput.value;
        if (await validateImageUrl(url)) {
          console.log("Entered image url is valid");
          setImageUrl(url);
          imageUrlHandler(url);
          handleShow();
        }
      } else if (fileInput.files[0]) {
        const url = await doUpload(fileInput.files[0]);
        console.log(url);
        if (url) {
          setImageUrl(url);
          imageUrlHandler(url);
          handleShow();
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      if (imageUrl) {
        console.log("Has image url");

        console.log("Image handled");
      }
    }
  }

  return (
    <div className="better-add-image full-width flex-c">
      <BootstrapForm onSubmit={handleImage}>
        <fieldset disabled={loading}>
          <div className="inputs">
            <UrlInput resultHandler={setImageUrl} edit={edit ? edit : ""} />
            <FileInput resultHandler={setImageUrl} />
          </div>
          <div className="menu flex-r full-width wrap justify-between">
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

  const preset = "rv4f402m";
  const cloud = "dt8j2ptfq";

  formData.append("file", file);
  formData.append("upload_preset", preset);

  try {
    const response = await client.post(
      `https://api.cloudinary.com/v1_1/${cloud}/image/upload`,
      formData
    );
    console.log(response);
    if (response.data.url) {
      console.log("Returning: " + response.data.url);
      return response.data.url;
    }
  } catch (error) {
    console.error(error);
  }
}
