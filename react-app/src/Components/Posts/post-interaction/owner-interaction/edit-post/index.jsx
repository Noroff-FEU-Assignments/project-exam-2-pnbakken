import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { ALL_POSTS_URL } from "../../../../../Constants";
import CreatePostForm from "../../../../Forms/create-post-form";

function EditPost({ post, auth }) {
  const [show, setShow] = useState(false);
  const url = ALL_POSTS_URL + `/${post.id}`;
  function showEdit() {
    setShow(!show);
  }
  return (
    <>
      <button onClick={showEdit}>Edit</button>
      {show && (
        <>
          <Modal show={show} onHide={showEdit}>
            <CreatePostForm url={url} edit={post} />
          </Modal>
        </>
      )}
    </>
  );
}

export default EditPost;
