import React, { useEffect } from "react";
import PropTypes from "prop-types";
import NewComment from "../new-comment";
import { useContext } from "react";
import AuthContext from "../../../../../Context/auth-context";
//import DeleteComment from "../delete-comment"; Pending API functionality
import ReplyToComment from "../reply-to-comment";
import createAxios from "../../../../../Functions/create-axios";
import { ALL_POSTS_URL } from "../../../../../Constants";
import { useState } from "react";

function DisplayComment({ commentData, postID }) {
  return (
    <div className="comment-display flex-column full-width">
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

export default DisplayComment;

DisplayComment.propTypes = {
  commentData: PropTypes.array.isRequired,
  postID: PropTypes.number.isRequired,
};

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
  console.log("Reply to: ");
  console.log(reply);
  return (
    <div className="comment" key={comment.id}>
      <div className="comment-header">
        <span className="comment-author">{comment.owner}</span>
        <span className="comment-date">{comment.created}</span>
      </div>
      {reply && (
        <div className="reply-to">
          {reply[0].owner} posted: <p>{reply[0].body}</p>
        </div>
      )}
      <div className="comment-body">{comment.body}</div>
      <div className="flex-column align-end">
        <ReplyToComment replyToId={comment.id} postID={postID} />
      </div>
    </div>
  );
}
