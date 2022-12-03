import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import validImageUrl from "../../../../Functions/valid-image-url";
import imageError from "../../../../assets/image/image-error.png";
import { useEffect } from "react";
import PostHeader from "../post-header";

import "./index.style.scss";

function PostContent({ data, isOwner = false }) {
  const [validMedia, setValidMedia] = useState(true);

  useEffect(() => {
    async function checkMedia() {
      if (data.media) {
        setValidMedia(await validImageUrl(data.media));
      }
    }
    checkMedia();
    //eslint-disable-next-line
  }, []);

  return (
    <div className={`post-content p-3 flex-c gap-sm`}>
      <PostHeader data={data} isOwner={isOwner} />
      <div className="post-main flex-c align-self-center full-width smaller-component-width gap-xs">
        <div className="post-title align-self-start">{data.title}</div>
        <div className="post-body flex-c full-width gap-sm">
          {data.body && <p>{data.body}</p>}
          {data.media && (
            <div className="post-image flex-c align-center full-width">
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
  isOwner: PropTypes.bool.isRequired,
};

export default PostContent;
