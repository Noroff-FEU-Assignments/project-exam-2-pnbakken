import React from "react";
import { useContext } from "react";
import AuthContext from "../../../Context/auth-context";
import CreatePostForm from "../../Forms/create-post-form";

function NewPost() {
  return (
    <div className="new-post full-width">
      <CreatePostForm />
    </div>
  );
}

export default NewPost;
