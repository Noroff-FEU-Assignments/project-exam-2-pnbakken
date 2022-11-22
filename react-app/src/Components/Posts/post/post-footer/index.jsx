import React from "react";
import PropTypes from "prop-types";

import "./index.style.scss";
import CommentCount from "../../post-interaction/comment/comment-count";
import ReactionCount from "../../post-interaction/reaction/reaction-count";

function PostFooter({ data }) {
  return (
    <div className="post-footer p-2 flex--row justify-evenly full-width">
      <CommentCount data={data} />
      <ReactionCount data={data} />
    </div>
  );
}

PostFooter.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PostFooter;
