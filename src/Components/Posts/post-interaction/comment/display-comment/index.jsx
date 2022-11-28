import React, { useEffect } from "react";
import PropTypes from "prop-types";
import NewComment from "../new-comment";
import { useContext } from "react";
import AuthContext from "../../../../../Context/auth-context";
//import DeleteComment from "../delete-comment"; Pending API functionality
import ReplyToComment from "../reply-to-comment";

import "./index.style.scss";

function DisplayComment({ commentData, postID }) {
  return (
    <div className="comment-display flex-c full-width">
      <NewComment postID={postID} />
      {commentData &&
        commentData.map((comment) => {
          return (
            <Comment
              comment={comment}
              allComments={commentData}
              postID={postID}
            />
          );
        })}
    </div>
  );
}

DisplayComment.propTypes = {
  commentData: PropTypes.array.isRequired,
  postID: PropTypes.number.isRequired,
};

export default DisplayComment;

function Comment({ comment, allComments, postID }) {
  const [auth, setAuth] = useContext(AuthContext);
  const isOwner = () => {
    if (auth && comment.owner === auth.name) {
      return true;
    } else return false;
  };
  const reply = comment.replyToId
    ? allComments.filter((com) => com.id === comment.replyToId)
    : null;
  return (
    <div className="comment p-2" key={comment.id}>
      <div className="comment-header">
        <span className="comment-author">{comment.owner}</span>
        <span className="comment-date">{comment.created}</span>
      </div>
      {reply && (
        <div className="reply-to ps-4 pe-4 pt-2 p b-2">
          <span className="op">{reply[0].owner}</span> commented:{" "}
          <p>{reply[0].body}</p>
        </div>
      )}
      <div className="comment-body">{comment.body}</div>
      <div className="flex-c align-end">
        <ReplyToComment replyToId={comment.id} postID={postID} />
      </div>
      <div className="bottom-border"></div>
    </div>
  );
}
