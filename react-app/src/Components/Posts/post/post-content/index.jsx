import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProfileImage from "../../../User/profile-image";
import useCheckImageUrl from "../../../../Hooks/use-check-image-url";

import "./index.style.scss";
import Message from "../../../Message/message";

import imageError from "../../../../assets/image/image-error.png";

function PostContent({ data }) {
  const dateCreated = new Date(data.created);
  const validMedia = useCheckImageUrl(data.media);
  return (
    <div className="post-content p-3 flex-c gap-sm">
      <div className="post-header flex-row wrap full-width align-center gap-xs">
        <Link to={`user/${data.author.name}`}>
          <ProfileImage src={data.author.avatar ? data.author.avatar : ""} />
        </Link>
        <div className="flex-c align-between ">
          <Link to={`/user/${data.author.name}`} className="post-author-name">
            <span className="author-name">{data.author.name}</span>
          </Link>
          <div className="post-created flex-row gap-xxs small-text">
            {dateCreated ? (
              <>
                <span className="post-time">
                  {dateCreated.toLocaleTimeString("en-GB")}
                </span>
                <span className="post-date">
                  {dateCreated.toLocaleDateString("en-GB")}
                </span>
              </>
            ) : (
              <Message type="error">Invalid Date</Message>
            )}
          </div>
        </div>
      </div>
      <div className="post-main flex-c align-self-center full-width gap-sm">
        <div className="post-title align-self-start">{data.title}</div>
        <div className="post-body flex-c align-center full-width gap-sm">
          <p>{data.body}</p>
          {data.media && (
            <div className="post-image">
              <img src={validMedia ? data.media : imageError} />
            </div>
          )}

          {data.tags && (
            <div className="flex-c full-width justify-end">
              <ul className="post-tags flex-row wrap full-width small-text justify-end gap-xxs">
                {data.tags.map((tag) => {
                  return (
                    <li className="post-tag" key={tag}>
                      {tag && <Link to={`/home?tag=${tag}`}>{tag}</Link>}
                    </li>
                  );
                })}
              </ul>
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
