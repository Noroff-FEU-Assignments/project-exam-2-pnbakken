import React from "react";
import useGetPosts from "../../../Hooks/use-get-posts";
import PostListItem from "../post-list-item";

import "./index.style.scss";

function DisplayAllPosts() {
  const { posts, loading, error } = useGetPosts();

  return (
    <div id="posts-display" className="flex-column align-center">
      {loading && <>Loading</>}
      {posts && (
        <ul className="post-list">
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

function renderPostList(posts) {
  return;
}
