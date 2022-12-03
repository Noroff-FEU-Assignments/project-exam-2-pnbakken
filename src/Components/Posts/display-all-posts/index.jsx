import React, { useEffect } from "react";
import { useState } from "react";
import useGet from "../../../Hooks/use-get";
import Message from "../../Message/message";
import SetApiOffset from "../../Utility-Components/set-api-offset";
import PostDetail from "../post-detail";
import PostListItem from "../post-list-item";
import PropTypes from "prop-types";

import "./index.style.scss";

function DisplayAllPosts({ settings, feed }) {
  const RATE_LIMIT = 50;
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset(0);
  }, [feed]);

  const [url, setUrl] = useState(
    settings.url + `&limit=${RATE_LIMIT}&offset=${offset}`
  );

  const [limitReached, setLimitReached] = useState(false);

  useEffect(() => {
    setUrl(settings.url + `&limit=${RATE_LIMIT}&offset=${offset}`);
  }, [offset, settings.url]);

  const { data, loading, error } = useGet({ url: url });

  const [showSingle, setShowSingle] = useState(false);

  useEffect(() => {
    if (data && data.length < RATE_LIMIT) {
      // data.length < RATE_LIMIT works pretty well unless the number of posts is exactly a multiple amount of the rate limit. In that case the app will not be aware it has no more posts to fetch and will let the user click forward to display an empty list
      setLimitReached(true);
    } else {
      setLimitReached(false);
    }
  }, [data]);

  return (
    <div
      id="posts-display"
      className="flex-c align-center full-width full-height justify-start"
    >
      {loading && <>Loading</>}
      {error && <Message type="error">{error.toString()}</Message>}

      {data &&
        !loading &&
        (showSingle && showSingle.id ? (
          <PostDetail postID={showSingle.id} setShow={setShowSingle} />
        ) : (
          <div className="flex-c wrap align-center full-width">
            <ul className="post-list flex-c align-center gap-lg full-width standard-component-width">
              <SetApiOffset
                limit={RATE_LIMIT}
                handleOffset={setOffset}
                offset={offset}
                limitReached={limitReached}
              />
              {data.map((post) => {
                return (
                  <PostListItem
                    data={post}
                    id={post.id}
                    key={post.id}
                    showSingle={setShowSingle}
                  />
                );
              })}
              <SetApiOffset
                limit={RATE_LIMIT}
                handleOffset={setOffset}
                offset={offset}
                limitReached={limitReached}
              />
              {limitReached && (
                <div>Looks like there's nothing more to show you</div>
              )}
            </ul>
          </div>
        ))}
    </div>
  );
}

DisplayAllPosts.propTypes = {
  settings: PropTypes.object.isRequired,
};

export default DisplayAllPosts;
