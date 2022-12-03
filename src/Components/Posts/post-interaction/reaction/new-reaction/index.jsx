import React from "react";
import ReactionForm from "../../../../Forms/reaction-form";
import PropTypes from "prop-types";

function NewReaction({ postID }) {
  return (
    <div>
      <ReactionForm postID={postID} />
    </div>
  );
}

NewReaction.propTypes = {
  postID: PropTypes.number.isRequired,
};

export default NewReaction;
