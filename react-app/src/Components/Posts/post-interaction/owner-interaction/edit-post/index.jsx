import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { ALL_POSTS_URL } from "../../../../../Constants";
import CreatePostForm from "../../../../Forms/create-post-form";

function EditPost({ post, auth }) {
  const [show, setShow] = useState(false);
  const url = ALL_POSTS_URL + `/${post.id}`;
  console.log(post);
  function showEdit() {
    setShow(!show);
  }
  return (
    <>
      <button onClick={showEdit}>Edit</button>
      {show && (
        <div className="flex-col align-center full-width">
          <Modal
            show={show}
            onHide={showEdit}
            className="full-width standard-component-width p-3"
          >
            <CreatePostForm url={url} edit={post} close={showEdit} />
          </Modal>
        </div>
      )}
    </>
  );
}

export default EditPost;
