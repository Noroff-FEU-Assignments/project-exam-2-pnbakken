import React from "react";
import PropTypes from "prop-types";

import "./index.style.scss";

function PostFooter({ data, isOwner, show, setShow }) {
  return (
    <div className="post-footer flex-row justify-evenly full-width">
      <div
        className="comments-count flex-column align-center show-interact"
        onClick={setShow}
      >
        <div className="count">
          {data._count.comments}
          <div className="caption">Comments</div>
        </div>
      </div>
      <div
        className="reactions-count flex-column align-center show-interact"
        onClick={setShow}
      >
        <div className="count">
          {data._count.reactions}
          <div className="caption">Reactions</div>
        </div>
      </div>
      <div className="post-edit">
        {isOwner && <div className="post-menu">Menu</div>}
      </div>
    </div>
  );
}

export default PostFooter;

PostFooter.propTypes = {
  data: PropTypes.object.isRequired,
  isOwner: PropTypes.bool,
  show: PropTypes.bool,
  setShow: PropTypes.func,
};
