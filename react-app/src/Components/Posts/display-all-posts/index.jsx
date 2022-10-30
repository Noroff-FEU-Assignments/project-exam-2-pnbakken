import React from "react";
import useGetPosts from "../../../Hooks/use-get-posts";

function DisplayAllPosts() {
  const { posts, loading, error } = useGetPosts();

  if (loading) {
    return <>Loading</>;
  }

  if (error) {
    return <>Error</>;
  }

  return (
    <div id="posts-display">
      {posts && <ul className="post-list">All Posts{renderPostList(posts)}</ul>}
    </div>
  );
}

export default DisplayAllPosts;

function renderPostList(posts) {
  return posts.map((post) => {
    return <li key={post.id}>{post.title}</li>;
  });
}
