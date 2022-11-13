import React, { useState } from "react";
import AddImage from "../../Forms/create-post-form/add-image";

import "./index.style.scss";

function EditProfileImage() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(!show);
  return <></>;
}

export default EditProfileImage;
