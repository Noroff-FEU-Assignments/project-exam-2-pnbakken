import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProfileImage from "../../../User/profile-image";

function PostContent({ data }) {
  return (
    <div className="post-content p-2 flex-column gap-sm">
      <div className="post-header flex-row wrap full-width align-center gap-xs">
        <Link to="#">
          <ProfileImage src={data.author.avatar ? data.author.avatar : ""} />
        </Link>
        <div className="flex-column align-between ">
          <Link to={`/user/${data.author.name}`}>
            <span className="author-name">{data.author.name}</span>
          </Link>
          <span className="post-date">{data.created}</span>
        </div>
      </div>
      <div className="post-main flex-column align-self-center full-width gap-xs">
        <div className="post-title align-self-start">{data.title}</div>
        <div className="post-body flex-column align-center full-width gap-md">
          <p>{data.body}</p>
          {data.media && (
            <div className="post-image">
              <img src={data.media} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

PostContent.propTypes = {
  data: PropTypes.object.isRequired,
  show: PropTypes.bool,
  setShow: PropTypes.func,
};

export default PostContent;
