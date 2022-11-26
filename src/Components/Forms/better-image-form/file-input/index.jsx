import React, { useState } from "react";
import { Form } from "react-bootstrap";

function FileInput({ resultHandler }) {
  const [imagePreview, setImagePreview] = useState("");
  const handleImagePreview = (e) => {
    if (e.target.files[0]) {
      toDataUrl(e.target.files[0], setImagePreview);
      resultHandler(imagePreview);
    } else setImagePreview("");
    console.log(imagePreview);
  };
  return (
    <Form.Group>
      <Form.Label>Choose a file to upload</Form.Label>
      <Form.Control
        id="file-input"
        type="file"
        accept="image/*"
        onChange={handleImagePreview}
      />
      <div>{imagePreview && <img src={imagePreview} />}</div>
    </Form.Group>
  );
}

export default FileInput;

function toDataUrl(file, handler) {
  const reader = new FileReader();

  reader.onloadend = () => {
    console.log(reader.result);
    handler(reader.result);
  };
  reader.readAsDataURL(file);
}