import React from "react";
import NewReaction from "../new-reaction";

function ReactionCount({ data }) {
  return (
    <div className="interact-count reactions-count flex-column align-center show-interact">
      <div className="count">
        <span className="number">
          {data._count.reactions ? data._count.reactions : " "}
        </span>
        <div className="caption">Reactions</div>
      </div>
      <NewReaction postID={data.id} />
    </div>
  );
}

export default ReactionCount;
