import React from "react";
import PropTypes from "prop-types";

import "./index.style.scss";

function PostListItem({ data }) {
  return (
    <li key={data.id} className="post-list-item flex-column align-center">
      <span className="full-size flex-row justify-end">{data.title}</span>
      <p>{data.body}</p>
      <p>{data.author.name}</p>
      <p>{data.media && <img src={data.media} />}</p>
    </li>
  );
}

export default PostListItem;

PostListItem.propTypes = {
  data: PropTypes.object.isRequired,
};
