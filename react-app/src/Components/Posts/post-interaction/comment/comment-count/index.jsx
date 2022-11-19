import React from "react";

import icon from "../../../../../assets/icons/icon-comment.svg";

function CommentCount({ data }) {
  return (
    <div className="interact-count comments-count flex-column align-center show-interact full-height">
      <div className="count flex-column full-height">
        <div className="flex-row full-width align-between justify-center">
          <img src={icon} alt="comments" />
          <span className="number">
            {data._count.comments ? data._count.comments : ""}
          </span>
        </div>
        <div className="caption">Comments</div>
      </div>
    </div>
  );
}

export default CommentCount;
