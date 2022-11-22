import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProfileImage from "../../../User/profile-image";
import useCheckImageUrl from "../../../../Hooks/use-check-image-url";

function PostContent({ data }) {
  const dateCreated = new Date(data.dateCreated);
  const validMedia = useCheckImageUrl(data.media);
  return (
    <div className="post-content p-3 flex-col gap-sm">
      <div className="post-header flex-row wrap full-width align-center gap-xs">
        <Link to={`user/${data.author.name}`}>
          <ProfileImage src={data.author.avatar ? data.author.avatar : ""} />
        </Link>
        <div className="flex-col align-between ">
          <Link to={`/user/${data.author.name}`} className="post-author-name">
            <span className="author-name">{data.author.name}</span>
          </Link>
          <div className="post-created flex-row gap-xxs">
            <span className="post-time">
              {new Date(data.created).toLocaleTimeString("en-GB")}
            </span>
            <span className="post-date">
              {new Date(data.created).toLocaleDateString("en-GB")}
            </span>
          </div>
        </div>
      </div>
      <div className="post-main flex-col align-self-center full-width gap-xs">
        <div className="post-title align-self-start">{data.title}</div>
        <div className="post-body flex-col align-center full-width gap-md">
          <p>{data.body}</p>
          {data.media && validMedia && (
            <div className="post-image">
              <img src={data.media} />
            </div>
          )}

          {data.tags && (
            <ul className="post-tags flex-row wrap">
              {data.tags.map((tag) => {
                return (
                  <li className="post-tag" key={tag}>
                    {tag && <>#{tag}&nbsp;</>}
                  </li>
                );
              })}
            </ul>
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
