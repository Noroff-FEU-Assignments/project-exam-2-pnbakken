import React from "react";
import PropTypes from "prop-types";

function PostListItem({ data }) {
  return (
    <li key={data.id}>
      {data.title}
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
