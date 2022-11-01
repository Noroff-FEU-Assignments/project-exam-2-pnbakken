import React from "react";
import { ALL_POSTS_URL } from "../../../Constants";
import useGet from "../../../Hooks/use-get";
import PostListItem from "../post-list-item";

import "./index.style.scss";

function DisplayAllPosts() {
  const settings = {
    url: ALL_POSTS_URL + "?_author=true",
  };
  const { data, loading, error } = useGet(settings);

  return (
    <div id="posts-display" className="flex-column align-center full-width">
      {loading && <>Loading</>}
      {data && (
        <ul className="post-list flex-column align-center gap-lg full-width p-2">
          All Posts
          {data.map((post) => {
            return <PostListItem data={post} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default DisplayAllPosts;
