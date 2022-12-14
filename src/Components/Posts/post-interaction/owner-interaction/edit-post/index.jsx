import React from "react";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { POSTS_URL } from "../../../../../Constants";
import CreatePostForm from "../../../../Forms/create-post-form";

function EditPost({ post, auth }) {
  const [show, setShow] = useState(false);
  const url = POSTS_URL + `/${post.id}`;
  function showEdit() {
    setShow(!show);
  }
  return (
    <>
      <button className="system-button" onClick={showEdit}>
        Edit
      </button>
      {show && (
        <div className="flex-c align-center full-width">
          <Modal
            show={show}
            onHide={showEdit}
            className="full-width standard-component-width p-3"
          >
            <CreatePostForm
              url={url}
              edit={post}
              close={showEdit}
              postBodyId="edit-post-body"
            />
          </Modal>
        </div>
      )}
    </>
  );
}

export default EditPost;
