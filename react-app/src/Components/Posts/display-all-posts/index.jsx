import React from "react";
import useGetPosts from "../../../Hooks/use-get-posts";
import PostListItem from "../post-list-item";

import "./index.style.scss";

function DisplayAllPosts() {
  const { posts, loading, error } = useGetPosts();

  return (
    <div id="posts-display" className="flex-column align-center full-size">
      {loading && <>Loading</>}
      {posts && (
        <ul className="post-list flex-column align-center gap-lg full-size">
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
