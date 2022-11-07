import React from "react";
import { useContext } from "react";
import { ALL_POSTS_URL } from "../../../Constants";
import AuthContext from "../../../Context/auth-context";
import CreatePostForm from "../../Forms/create-post-form";

function NewPost() {
  return (
    <div className="new-post full-width">
      <CreatePostForm url={ALL_POSTS_URL} />
    </div>
  );
}

export default NewPost;
