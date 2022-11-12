import React from "react";

function CommentCount({ data }) {
  return (
    <div className="interact-count comments-count flex-column align-center show-interact full-height">
      <div className="count flex-column full-height">
        <span className="number">
          {data._count.comments ? data._count.comments : ""}
        </span>
        <div className="caption">Comments</div>
      </div>
    </div>
  );
}

export default CommentCount;
