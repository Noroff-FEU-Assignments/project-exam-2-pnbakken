import React from "react";
import { useState } from "react";
import { ALL_POSTS_URL } from "../../../../../Constants";
import CreateComment from "../../../../Forms/create-comment-form";

function ReplyToComment({ replyToId, postID }) {
  const [show, setShow] = useState(false);

  const url = ALL_POSTS_URL + `/${postID}/comment`;

  function handleShow() {
    setShow(!show);
  }
  return (
    <>
      <button onClick={handleShow}>Reply</button>
      {show && <CreateComment url={url} replyID={replyToId} />}
    </>
  );
}

export default ReplyToComment;
