import React, { useState } from "react";
import PropTypes from "prop-types";
import BootstrapForm from "../bootstrap-form";
import { Form } from "react-bootstrap";

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

  function validateImage() {
    console.log("Validating image selection");
  }

  return (
    <BootstrapForm>
      <fieldset disabled={loading}>
        <div className="inputs">
          <Form.Group>
            <Form.Label>Image Url</Form.Label>
            <Form.Control
              type="text"
              id="url-input"
              placeholder="Enter a public image url"
              defaultValue={edit ? edit : ""}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Upload file</Form.Label>
            <Form.Control type="file" id="file-input" />
          </Form.Group>
        </div>
        <div className="menu flex-row full-width wrap justify-between">
          <button type="button" onClick={handleShow}>
            Cancel
          </button>
          <button type="button" onClick={validateImage}>
            Submit
          </button>
        </div>
      </fieldset>
    </BootstrapForm>
  );
}

BetterImageForm.propTypes = {
  imageUrlHandler: PropTypes.func.isRequired,
  handleShow: PropTypes.func,
  edit: PropTypes.string,
};

export default BetterImageForm;
