import React, { useEffect } from "react";
import { useState } from "react";
import { POSTS_URL } from "../../../Constants";
import useGet from "../../../Hooks/use-get";
import ImageCarousel from "../../Design-Components/image-carousel";
import Message from "../../Message/message";
import SetApiOffset from "../../Utility-Components/set-api-offset";
import PostDetail from "../post-detail";
import PostListItem from "../post-list-item";

import "./index.style.scss";

function DisplayAllPosts({ settings }) {
  const RATE_LIMIT = 50;
  const [offset, setOffset] = useState(0);
  const receivedUrl = settings.url;
  const [url, setUrl] = useState(
    settings.url + `&limit=${RATE_LIMIT}&offset=${offset}`
  );

  const [limitReached, setLimitReached] = useState(false);

  useEffect(() => {
    setUrl(receivedUrl + `&limit=${RATE_LIMIT}&offset=${offset}`);
  }, [offset]);

  const { data, loading, error } = useGet({ url: url });
  const [posts, setPosts] = useState(null);

  const [showSingle, setShowSingle] = useState(false);
  const [lastSelected, setLastSelected] = useState(null);

  useEffect(() => {
    if (data && data.length < RATE_LIMIT) {
      // data.length < RATE_LIMIT works pretty well unless the number of posts is exactly a multiple of the limit. In that case the app will not be aware it has no more posts to fetch and will let the user click forwards to display an empty list
      setLimitReached(true);
    } else {
      setLimitReached(false);
    }
  }, [data]);

  useEffect(() => {
    if (lastSelected && data) {
      const targetElement = document.getElementById(lastSelected);
      if (targetElement) {
        targetElement.scrollIntoView({
          behaviour: "smooth",
          block: "start",
        });
      }
    }
  }, [lastSelected, data]);
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
          <PostDetail
            postID={showSingle.id}
            setShow={setShowSingle}
            setLastShown={setLastSelected}
          />
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

export default DisplayAllPosts;
