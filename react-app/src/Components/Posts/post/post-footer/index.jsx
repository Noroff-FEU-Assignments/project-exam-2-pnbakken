import React from "react";
import PropTypes from "prop-types";

import "./index.style.scss";
import CommentCount from "../../post-interaction/comment/comment-count";

function PostFooter({ data, isOwner, show, setShow, detail }) {
  if (detail) {
    return <div className="post-footer flex-column full-width"></div>;
  }

  return (
    <div className="post-footer flex-row justify-evenly full-width">
      <CommentCount data={data} />

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
  detail: PropTypes.bool,
};
