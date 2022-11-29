import React from "react";
import { useState } from "react";
import { POSTS_URL } from "../../../../../Constants";
import CreateComment from "../../../../Forms/create-comment-form";

function ReplyToComment({ replyToId, postID }) {
  const [show, setShow] = useState(false);

  const url = POSTS_URL + `/${postID}/comment`;

  function handleShow() {
    setShow(!show);
  }
  return (
    <>
      <button onClick={handleShow} className="discrete">
        Reply
      </button>
      {show && <CreateComment url={url} replyID={replyToId} />}
    </>
  );
}

export default ReplyToComment;
