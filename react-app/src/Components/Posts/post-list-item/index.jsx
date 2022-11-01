import React, { useState } from "react";
import PropTypes from "prop-types";

import "./index.style.scss";
import { useContext } from "react";
import AuthContext from "../../../Context/auth-context";
import PostDetailModal from "../post-detail-modal";
import PostContent from "../post/post-content";
import PostFooter from "../post/post-footer";
import ClickableWrapper from "./clickable-wrapper";
import Post from "../post";

function PostListItem({ data }) {
  const [auth, setAuth] = useContext(AuthContext);
  const isOwner = findOwner(data);

  const [showPostDetail, setShowPostDetail] = useState(false);
  const showDetail = () => setShowPostDetail(!showPostDetail);

  function findOwner(post) {
    if (auth) {
      const localUser = auth.email;
      const postAuthor = post.author.email;

      if (postAuthor === localUser) {
        return true;
      } else return false;
    } else return false;
  }

  return (
    <li
      key={data.id}
      className={`post-list-item flex-column align-center full-width radius-sm `}
    >
      <Post isOwner>
        <PostContent
          data={data}
          hasModal={true}
          show={showPostDetail}
          setShow={showDetail}
        />
        <ClickableWrapper onClick={showDetail}>
          <PostFooter
            data={data}
            isOwner={isOwner}
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
          isOwner={isOwner}
        />
      )}
    </li>
  );
}

export default PostListItem;

PostListItem.propTypes = {
  data: PropTypes.object.isRequired,
};
