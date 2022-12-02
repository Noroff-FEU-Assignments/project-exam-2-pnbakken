import React, { useState } from "react";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

function UrlInput({ resultHandler, edit = "", className = "" }) {
  const [imagePreview, setImagePreview] = useState(edit);
  function handleChange(e) {
    setImagePreview(e.target.value);
    resultHandler(e.target.value);
  }
  return (
    <Form.Group className={`url-input ${className}`}>
      <Form.Label>Image Url</Form.Label>
      <Form.Control
        type="text"
        id="url-input"
        placeholder="Enter a public image url"
        defaultValue={edit ? edit : ""}
        onChange={handleChange}
      />
      <div>{imagePreview && <img src={imagePreview} />}</div>
    </Form.Group>
  );
}

UrlInput.propTypes = {
  resultHandler: PropTypes.func.isRequired,
  edit: PropTypes.string,
};

export default UrlInput;
