import React from "react";
import PropTypes from "prop-types";

function PostFooter({ data }) {
  return (
    <div className="post-footer flex-row justify-evenly full-width">
      <div className="comments-count flex-column align-center">
        <div className="count">
          {data._count.comments}
          <div className="caption">Comments</div>
        </div>
      </div>
      <div className="reactions-count flex-column align-center">
        <div className="count">
          {data._count.reactions}
          <div className="caption">Reactions</div>
        </div>
      </div>
    </div>
  );
}

export default PostFooter;

PostFooter.propTypes = {
  data: PropTypes.object.isRequired,
};
