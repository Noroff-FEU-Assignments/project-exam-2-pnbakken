import React from "react";
import ReactionForm from "../../../../Forms/reaction-form";

function NewReaction({ postID }) {
  return (
    <div>
      <ReactionForm postID={postID} />
    </div>
  );
}

export default NewReaction;
