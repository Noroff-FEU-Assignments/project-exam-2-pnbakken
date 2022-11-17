import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Form } from "react-bootstrap";

import "./index.style.scss";

function CustomTextArea({
  id = "",
  className = "",
  register,
  name = "",
  ...rest
}) {
  const [value, setValue] = useState("");
  const textareaRef = document.querySelector(`#${id}`);
  useEffect(() => {
    if (textareaRef) {
      textareaRef.style.height = "0px";
      const scrollHeight = textareaRef.scrollHeight;
      textareaRef.style.height = scrollHeight + "px";
    }
  }, [textareaRef, value]);

  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <>
      <Form.Control
        as="textarea"
        id={id}
        className={`textarea-resize ${className}`}
        rows={1}
        onChange={handleChange}
        {...register(name)}
        {...rest}
      />
    </>
  );
}

export default CustomTextArea;