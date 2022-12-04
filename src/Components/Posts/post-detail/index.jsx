import React from "react";
import PropTypes from "prop-types";
import { POSTS_URL } from "../../../Constants";
import useGet from "../../../Hooks/use-get";
import Post from "../post";
import InteractionPanel from "../post-interaction/interaction-panel";
import DisplayResponseErrors from "../../Message/display-response-errors";

// This was a  modal in the beginning but it was a pain to style so I've changed rendering methods in the parent component instead. Also my whole system for displaying one post is a complete mess
function PostDetail({ postID, setShow }) {
  const settings = {
    url: POSTS_URL + `/${postID}?_author=true&_comments=true&_reactions=true`,
  };

  const { data, loading, error } = useGet(settings);

  function closePost() {
    setShow(false);
  }

  return (
    <>
      {loading && <>Loading</>}
      {data && (
        <>
          <Post data={data} close={closePost} isOpen={true}>
            <InteractionPanel data={data} />
          </Post>
          <button className="mt-2 discrete" onClick={closePost}>
            Close
          </button>
        </>
      )}
      {error && (
        <>
          <DisplayResponseErrors data={error.response.data.errors} />
          <button className="mt-2 discrete" onClick={closePost}>
            Close
          </button>
        </>
      )}
    </>
  );
}

PostDetail.propTypes = {
  postID: PropTypes.number.isRequired,
  setShow: PropTypes.func.isRequired,
};

export default PostDetail;
