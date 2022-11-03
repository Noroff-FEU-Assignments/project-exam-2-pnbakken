import React from "react";
import PropTypes from "prop-types";

function DisplayComment({ commentData }) {
  return (
    <div className="comment-display flex-column full-width">
      {commentData &&
        commentData.map((comment) => {
          return <Comment comment={comment} />;
        })}
    </div>
  );
}

export default DisplayComment;

DisplayComment.propTypes = {
  commentData: PropTypes.object.isRequired,
};

function Comment({ comment }) {
  return (
    <div className="comment" key={comment.id}>
      <div className="comment-header">
        <span className="comment-author">{comment.owner}</span>
        <span className="comment-date">{comment.created}</span>
      </div>
      <div className="comment-body">{comment.body}</div>
    </div>
  );
}
