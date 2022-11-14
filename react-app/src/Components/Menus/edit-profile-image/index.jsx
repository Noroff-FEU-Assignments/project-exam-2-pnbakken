import React, { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { USER_URL } from "../../../Constants";
import AuthContext from "../../../Context/auth-context";
import { HistoryProvider } from "../../../Context/history-context";
import createAxios from "../../../Functions/create-axios";
import AddImageForm from "../../Forms/add-image-form";
import BetterImageForm from "../../Forms/better-image-form";

import "./index.style.scss";

function EditProfileImage({ handleShow }) {
  const [auth, setAuth] = useContext(AuthContext);
  const userUrl = USER_URL + `/${auth.name}/media`;
  const [imageUrl, setImageUrl] = useState("");

  return (
    <HistoryProvider>
      <BetterImageForm imageUrlHandler={setImageUrl} handleShow={handleShow} />
    </HistoryProvider>
  );
}

export default EditProfileImage;
