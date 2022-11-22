import React, { useState } from "react";
import PropTypes from "prop-types";

import "./index.style.scss";
import { useContext } from "react";
import AuthContext from "../../../Context/auth-context";
import PostDetailModal from "../post-detail";
import PostContent from "../post/post-content";
import PostFooter from "../post/post-footer";
import ClickableWrapper from "../../Utility-Components/clickable-wrapper";
import Post from "../post";
import InteractionPanel from "../post-interaction/interaction-panel";
import SelectedImageDisplay from "../../Forms/better-image-form/selectedImageDisplay";

function PostListItem({ data, showSingle }) {
  const [auth, setAuth] = useContext(AuthContext);

  function handleShow() {
    showSingle({ id: data.id });
  }
  return (
    <li
      className={`post-list-item flex-col align-center full-width radius-sm `}
    >
      <Post data={data}>
        <ClickableWrapper onClick={handleShow}>
          <PostFooter data={data} />
        </ClickableWrapper>
      </Post>
    </li>
  );
}

PostListItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PostListItem;
