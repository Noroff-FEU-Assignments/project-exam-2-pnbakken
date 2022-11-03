import React from "react";
import CommentCount from "../comment/comment-count";
import DisplayComment from "../comment/display-comment";
import DisplayReaction from "../reaction/display-reaction";
import ReactionCount from "../reaction/reaction-count";

function InteractionPanel({ data }) {
  return (
    <div className="interaction-panel">
      <div className="counts flex-row full-width justify-evenly">
        <CommentCount data={data} />
        <ReactionCount data={data} />
      </div>
      <DisplayReaction reactionData={data.reactions} />
      <DisplayComment commentData={data.comments} />
    </div>
  );
}

export default InteractionPanel;
