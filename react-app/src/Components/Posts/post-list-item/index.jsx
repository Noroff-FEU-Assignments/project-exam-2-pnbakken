import React from "react";
import PropTypes from "prop-types";

import "./index.style.scss";
import ProfileImage from "../../User/profile-image";
import { Link } from "react-router-dom";

function PostListItem({ data }) {
  return (
    <li key={data.id} className="post-list-item flex-column align-center">
      <div className="post-author">
        <Link to="#" className="flex-row full-size gap-xs">
          <ProfileImage src={data.author.avatar ? data.author.avatar : ""} />
          <span className="author-name">{data.author.name}</span>
        </Link>
      </div>
    </li>
  );
}

export default PostListItem;

PostListItem.propTypes = {
  data: PropTypes.object.isRequired,
};
