import React from "react";
import { Form } from "react-bootstrap";

function TagInput({ tagHandler }) {
  function checkTags(e) {
    const tags = e.target.value;
  }
  return <Form.Control type="text" onChange={checkTags}></Form.Control>;
}

export default TagInput;
