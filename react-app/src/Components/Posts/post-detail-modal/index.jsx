import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import { ALL_POSTS_URL } from "../../../Constants";
import useGetPosts from "../../../Hooks/use-get-posts";
import { useEffect } from "react";

function PostDetailModal({ postID, show, setShow }) {
  console.log(postID);
  const settings = {
    url:
      ALL_POSTS_URL + `/${postID}?_author=true&_comments=true&_reactions=true`,
  };

  const { posts, loading, error } = useGetPosts(settings);

  useEffect(() => {
    console.log(posts);
  }, [posts]);

  return (
    <Modal show={show} onHide={setShow}>
      Hello
      {posts && posts.body}
    </Modal>
  );
}

export default PostDetailModal;

PostDetailModal.propTypes = {
  postID: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};
