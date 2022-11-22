import React, { useEffect } from "react";
import { useState } from "react";
import useGet from "../../../Hooks/use-get";
import Message from "../../Message/message";
import PostDetail from "../post-detail";
import PostListItem from "../post-list-item";

import "./index.style.scss";

function DisplayAllPosts({ settings }) {
  const { data, loading, error } = useGet(settings);

  const [showSingle, setShowSingle] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);

  useEffect(() => {
    if (lastSelected) {
      const targetElement = document.getElementById(lastSelected);
      if (targetElement) {
        targetElement.scrollIntoView({
          behaviour: "smooth",
          block: "start",
        });
      }
    }
  }, [lastSelected]);
  return (
    <div id="posts-display" className="flex-c align-center full-width">
      {loading && <>Loading</>}
      {error && <Message type="error">{error.toString()}</Message>}
      {data &&
        (showSingle && showSingle.id ? (
          <PostDetail
            postID={showSingle.id}
            setShow={setShowSingle}
            setLastShown={setLastSelected}
          />
        ) : (
          <ul className="post-list flex-c align-center gap-lg full-width p-2">
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
          </ul>
        ))}
    </div>
  );
}

export default DisplayAllPosts;
