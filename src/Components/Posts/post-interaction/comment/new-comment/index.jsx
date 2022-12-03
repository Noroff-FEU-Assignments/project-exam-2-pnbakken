import React from "react";
import { POSTS_URL } from "../../../../../Constants";
import CreateComment from "../../../../Forms/create-comment-form";
import PropTypes from "prop-types";

function NewComment({ postID }) {
  const url = POSTS_URL + `/${postID}/comment`;
  return (
    <div>
      <CreateComment url={url} />
    </div>
  );
}

NewComment.propTypes = {
  postID: PropTypes.number.isRequired,
};

export default NewComment;
