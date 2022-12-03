import React from "react";
import PropTypes from "prop-types";
import PostFooter from "../post/post-footer";
import ClickableWrapper from "../../Utility-Components/clickable-wrapper";
import Post from "../post";

import "./index.style.scss";

function PostListItem({ data, showSingle }) {
  function handleShow() {
    showSingle({ id: data.id });
  }
  return (
    <li className={`post-list-item flex-c align-center full-width radius-sm `}>
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
  showSingle: PropTypes.func.isRequired,
};

export default PostListItem;
