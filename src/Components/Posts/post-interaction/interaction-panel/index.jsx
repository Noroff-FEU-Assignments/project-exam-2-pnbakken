import React from "react";
import CommentCount from "../comment/comment-count";
import DisplayComment from "../comment/display-comment";
import DisplayReaction from "../reaction/display-reaction";
import NewReaction from "../reaction/new-reaction";
import ReactionCount from "../reaction/reaction-count";

function InteractionPanel({ data }) {
  return (
    <div className="interaction-panel post-footer p-3 gap-sm">
      <div className="counts flex-r full-width justify-evenly">
        <CommentCount data={data} />
        <ReactionCount data={data} />
      </div>
      <DisplayReaction reactionData={data.reactions} />
      <div className="flex-c gap-sm">
        <NewReaction postID={data.id} />
        <DisplayComment commentData={data.comments} postID={data.id} />
      </div>
    </div>
  );
}

export default InteractionPanel;
