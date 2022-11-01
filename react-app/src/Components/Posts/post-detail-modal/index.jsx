import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import { ALL_POSTS_URL } from "../../../Constants";
import { useEffect } from "react";
import DetailContent from "./detail-content";
import useGet from "../../../Hooks/use-get";
import Post from "../post";
import PostFooter from "../post/post-footer";

function PostDetailModal({ postID, show, setShow, isOwner }) {
  console.log(postID);
  const settings = {
    url:
      ALL_POSTS_URL + `/${postID}?_author=true&_comments=true&_reactions=true`,
  };

  const { data, loading, error } = useGet(settings);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <Modal show={show} onHide={setShow} className="radius-sm full-width">
      {data && (
        <Post isOwner={isOwner}>
          <DetailContent data={data} />
          <PostFooter data={data} isOwner={isOwner} />
        </Post>
      )}
    </Modal>
  );
}

export default PostDetailModal;

PostDetailModal.propTypes = {
  postID: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  isOwner: PropTypes.bool,
};
