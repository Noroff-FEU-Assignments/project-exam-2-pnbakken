import React from "react";
import NewReaction from "../new-reaction";

import icon from "../../../../../assets/icon/icon-thumbsup.svg";

function ReactionCount({ data }) {
  return (
    <div className="interact-count reactions-count flex-col align-center show-interact">
      <div className="count">
        <div className="flex-row full-width align-between justify-center gap-xxs">
          <img src={icon} alt="reaction" />
          <span className="number">
            {data._count.reactions ? data._count.reactions : ""}
          </span>
        </div>
        <div className="caption">Reactions</div>
      </div>
      <NewReaction postID={data.id} />
    </div>
  );
}

export default ReactionCount;
