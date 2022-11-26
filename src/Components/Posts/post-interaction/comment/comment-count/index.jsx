import React from "react";

import icon from "../../../../../assets/icon/icon-comment.svg";

function CommentCount({ data }) {
  return (
    <div className="interact-count comments-count flex-c align-center show-interact full-height">
      <div className="count flex-c full-height">
        <div className="flex-r full-width align-between justify-center gap-xxs">
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
