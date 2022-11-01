import React from "react";

function CommentCount({ data }) {
  return (
    <div className="interact-count comments-count flex-column align-center show-interact">
      <div className="count">
        <span className="number">{data._count.comments}</span>
        <div className="caption">Comments</div>
      </div>
    </div>
  );
}

export default CommentCount;
