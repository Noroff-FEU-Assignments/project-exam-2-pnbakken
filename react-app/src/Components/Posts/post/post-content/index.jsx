import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProfileImage from "../../../User/profile-image";

function PostContent({ data, setShow }) {
  return (
    <div className="post-content p-2">
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
      </div>
      <div className="post-body flex-column align-center full-width gap-md">
        {data.body}
        {data.media && (
          <div className="post-image">
            <img src={data.media} />
          </div>
        )}
      </div>
    </div>
  );
}

export default PostContent;

PostContent.propTypes = {
  data: PropTypes.object.isRequired,
  show: PropTypes.bool,
  setShow: PropTypes.func,
};
