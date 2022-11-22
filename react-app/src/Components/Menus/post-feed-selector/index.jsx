import React from "react";

function PostFeedSelector({ getChoice }) {
  return (
    <div className="post-feed-selector flex--row justify-center gap-md">
      <button type="button" className="discrete">
        Following
      </button>
      <button type="button" className="discrete">
        All Users
      </button>
    </div>
  );
}

export default PostFeedSelector;
