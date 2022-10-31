import React, { useState } from "react";
import PropTypes from "prop-types";

import "./index.style.scss";
import ProfileImage from "../../User/profile-image";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../../Context/auth-context";
import PostFooter from "./post-footer";

function PostListItem({ data }) {
  const [auth, setAuth] = useContext(AuthContext);
  const [isOwnPost, setIsOwnPost] = useState(findOwner(data));

  function findOwner(post) {
    if (auth) {
      const localUser = auth.name;
      const postAuthor = post.author.name;

      if (postAuthor === localUser) {
        return true;
      } else return false;
    } else return false;
  }
  return (
    <li key={data.id} className="post-list-item flex-column align-center p-2">
      <div className="post-header flex-row wrap full-width align center gap-sm">
        <Link to="#">
          <ProfileImage src={data.author.avatar ? data.author.avatar : ""} />
        </Link>
        <div className="flex-column align-between ">
          <Link to="#">
            <span className="author-name">{data.author.name}</span>
          </Link>
          <span className="post-date">{data.created}</span>
        </div>
        {isOwnPost && <div className="post-menu">Menu</div>}
      </div>
      <div className="post-body flex-column align-center full-width gap-md">
        {data.body}
        {data.media && (
          <div className="post-image full-width">
            <img src={data.media} />
          </div>
        )}
      </div>
      <PostFooter data={data} />
    </li>
  );
}

export default PostListItem;

PostListItem.propTypes = {
  data: PropTypes.object.isRequired,
};
