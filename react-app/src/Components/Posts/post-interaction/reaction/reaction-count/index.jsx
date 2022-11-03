import React from "react";

function ReactionCount({ data }) {
  return (
    <div className="interact-count reactions-count flex-column align-center show-interact">
      <div className="count">
        <span className="number">
          {data._count.reactions ? data._count.reactions : " "}
        </span>
        <div className="caption">Reactions</div>
      </div>
    </div>
  );
}

export default ReactionCount;
