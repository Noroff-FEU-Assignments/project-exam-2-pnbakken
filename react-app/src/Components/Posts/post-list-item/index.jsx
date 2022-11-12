import React, { useState } from "react";
import PropTypes from "prop-types";

import "./index.style.scss";
import { useContext } from "react";
import AuthContext from "../../../Context/auth-context";
import PostDetailModal from "../post-detail-modal";
import PostContent from "../post/post-content";
import PostFooter from "../post/post-footer";
import ClickableWrapper from "../../Utility-Components/clickable-wrapper";
import Post from "../post";

function PostListItem({ data }) {
  const [auth, setAuth] = useContext(AuthContext);

  const [showPostDetail, setShowPostDetail] = useState(false);
  const showDetail = () => setShowPostDetail(!showPostDetail);

  return (
    <li
      className={`post-list-item flex-column align-center full-width radius-sm `}
    >
      <Post data={data}>
        <PostContent data={data} hasModal={true} />
        <ClickableWrapper onClick={showDetail}>
          <PostFooter
            data={data}
            hasModal={true}
            show={showPostDetail}
            setShow={showDetail}
          />
        </ClickableWrapper>
      </Post>
      {showPostDetail && (
        <PostDetailModal
          postID={data.id}
          show={showPostDetail}
          setShow={setShowPostDetail}
        />
      )}
    </li>
  );
}

PostListItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PostListItem;
