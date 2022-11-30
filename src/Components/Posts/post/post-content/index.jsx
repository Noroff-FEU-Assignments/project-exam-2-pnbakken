import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProfileImage from "../../../User/profile-image";
import validImageUrl from "../../../../Functions/valid-image-url";

import "./index.style.scss";
import Message from "../../../Message/message";

import imageError from "../../../../assets/image/image-error.png";
import { useEffect } from "react";

function PostContent({ data }) {
  const dateCreated = new Date(data.created);
  const [validMedia, setValidMedia] = useState(true);
  useEffect(() => {
    async function checkMedia() {
      if (data.media) {
        setValidMedia(await validImageUrl(data.media));
      }
    }
    checkMedia();
  }, []);

  return (
    <div className={`post-content p-3 flex-c gap-sm`}>
      <div className="post-header flex-r wrap full-width align-center gap-xs">
        <Link to={`/user/${data.author.name}`}>
          <ProfileImage src={data.author.avatar ? data.author.avatar : ""} />
        </Link>
        <div className="flex-c align-between gap-xxs">
          <Link to={`/user/${data.author.name}`} className="post-author-name">
            <span className="author-name">{data.author.name}</span>
          </Link>
          <div className="post-created flex-r gap-xxs small-text">
            {dateCreated ? (
              <>
                <span className="post-date">
                  {dateCreated.toLocaleDateString("en-GB")}
                </span>
                <span className="post-time">
                  {dateCreated.toLocaleTimeString("en-GB")}
                </span>
              </>
            ) : (
              <Message type="error">Invalid Date</Message>
            )}
          </div>
        </div>
      </div>
      <div className="post-main flex-c align-self-center full-width smaller-component-width gap-xs">
        <div className="post-title align-self-start">{data.title}</div>
        <div className="post-body flex-c full-width gap-sm">
          <p>{data.body}</p>
          {data.media && (
            <div className="post-image full-width">
              <img
                src={validMedia ? data.media : imageError}
                alt={data.title}
              />
            </div>
          )}

          {data.tags && (
            <div className="flex-c full-width justify-end">
              <ul className="post-tags flex-r wrap full-width small-text justify-end gap-xs">
                {data.tags.map((tag) => {
                  return (
                    <li className="post-tag" key={tag}>
                      {tag && (
                        <>
                          #<Link to={`/home?tag=${tag}`}>{tag}</Link>
                        </>
                      )}
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
