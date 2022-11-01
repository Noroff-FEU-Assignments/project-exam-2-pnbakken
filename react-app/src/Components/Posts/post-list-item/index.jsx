import React, { useState } from "react";
import PropTypes from "prop-types";

import "./index.style.scss";
import ProfileImage from "../../User/profile-image";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../../Context/auth-context";
import PostFooter from "./post-footer";
import PostContent from "./post-content";
import PostDetailModal from "../post-detail-modal";

function PostListItem({ data }) {
  const [auth, setAuth] = useContext(AuthContext);
  const [isOwner, setIsOwner] = useState(findOwner(data));

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
      className={`post-list-item ${
        isOwner ? "owner" : ""
      }   flex-column radius-sm`}
    >
      <PostContent data={data} show={showPostDetail} setShow={showDetail} />
      <PostFooter
        data={data}
        isOwner={isOwner}
        show={showPostDetail}
        setShow={showDetail}
      />
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

export default PostListItem;

PostListItem.propTypes = {
  data: PropTypes.object.isRequired,
};
