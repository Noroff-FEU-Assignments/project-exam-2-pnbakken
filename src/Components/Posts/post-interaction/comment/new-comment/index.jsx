import React from "react";
import { POSTS_URL } from "../../../../../Constants";
import CreateComment from "../../../../Forms/create-comment-form";

function NewComment({ postID }) {
  const url = POSTS_URL + `/${postID}/comment`;
  return (
    <div>
      <CreateComment url={url} />
    </div>
  );
}

export default NewComment;
