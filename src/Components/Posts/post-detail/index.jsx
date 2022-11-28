import React from "react";
import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import { POSTS_URL } from "../../../Constants";
import { useEffect } from "react";
import useGet from "../../../Hooks/use-get";
import Post from "../post";
import PostFooter from "../post/post-footer";
import InteractionPanel from "../post-interaction/interaction-panel";

// This was a genuine modal in the beginning but it was a pain to style so I've changed rendering methods in the parent component instead
function PostDetail({ postID, setShow, setLastShown }) {
  console.log(postID);
  const settings = {
    url: POSTS_URL + `/${postID}?_author=true&_comments=true&_reactions=true`,
  };

  const { data, loading, error } = useGet(settings);

  function closePost() {
    setShow(null);
    setLastShown(postID);
  }

  return (
    <>
      {loading && <>Loading</>}
      {data && (
        <Post data={data} close={closePost}>
          <InteractionPanel data={data} />
        </Post>
      )}
    </>
  );
}

PostDetail.propTypes = {
  postID: PropTypes.number.isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default PostDetail;
