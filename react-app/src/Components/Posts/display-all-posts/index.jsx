import React from "react";
import { ALL_POSTS_URL } from "../../../Constants";
import useGetPosts from "../../../Hooks/use-get-posts";
import PostListItem from "../post-list-item";

import "./index.style.scss";

function DisplayAllPosts() {
  const settings = {
    url: ALL_POSTS_URL + "?_author=true",
  };
  const { posts, loading, error } = useGetPosts(settings);

  return (
    <div id="posts-display" className="flex-column align-center full-width">
      {loading && <>Loading</>}
      {posts && (
        <ul className="post-list flex-column align-center gap-lg full-width p-2">
          All Posts
          {posts.map((post) => {
            return <PostListItem data={post} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default DisplayAllPosts;
