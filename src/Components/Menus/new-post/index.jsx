import React, { useContext } from "react";
import { Modal } from "react-bootstrap";
import { POSTS_URL } from "../../../Constants";
import ShowNewPostContext from "../../../Context/show-new-post-context";
import CreatePostForm from "../../Forms/create-post-form";
import getRandomEncouragement from "../../Forms/create-post-form/string-collection";

import "./index.style.scss";

function NewPost() {
  const [showNewPost, setShowNewPost] = useContext(ShowNewPostContext);
  function closeNewPost() {
    setShowNewPost(false);
  }

  const encouragement = getRandomEncouragement();
  return (
    <Modal
      className="new-post full-width"
      show={showNewPost}
      onHide={closeNewPost}
    >
      <CreatePostForm
        url={POSTS_URL}
        close={closeNewPost}
        encouragement={encouragement}
      />
    </Modal>
  );
}

export default NewPost;
