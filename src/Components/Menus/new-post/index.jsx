import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { ALL_POSTS_URL } from "../../../Constants";
import ShowNewPostContext from "../../../Context/show-new-post-context";
import CreatePostForm from "../../Forms/create-post-form";

import "./index.style.scss";

function NewPost() {
  const [showNewPost, setShowNewPost] = useContext(ShowNewPostContext);
  function closeNewPost() {
    setShowNewPost(false);
  }
  return (
    <Modal
      className="new-post full-width"
      show={showNewPost}
      onHide={closeNewPost}
    >
      <CreatePostForm url={ALL_POSTS_URL} close={closeNewPost} />
    </Modal>
  );
}

export default NewPost;
