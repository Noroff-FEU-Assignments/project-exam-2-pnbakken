import React from "react";
import PropTypes from "prop-types";

import "./index.style.scss";

function PostFeedSelector({ getSelection, currentSelection }) {
  function sendChoice(e) {
    getSelection(e.target.value);
  }
  return (
    <div className="post-feed-selector flex-r justify-center gap-md full-width standard-component-width p-1 pt-2 radius-sm">
      <button
        type="button"
        className={`discrete ${
          currentSelection === "following" ? "current" : ""
        }`}
        value="following"
        onClick={sendChoice}
      >
        Following
      </button>
      <div className="splitter"></div>
      <button
        type="button"
        className={`discrete ${currentSelection === "all" ? "current" : ""}`}
        value="all"
        onClick={sendChoice}
      >
        See All
      </button>
    </div>
  );
}

PostFeedSelector.propTypes = {
  getSelection: PropTypes.func.isRequired,
  currentSelection: PropTypes.string.isRequired,
};

export default PostFeedSelector;
