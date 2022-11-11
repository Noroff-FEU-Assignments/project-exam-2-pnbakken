import React from "react";
import { useContext } from "react";
import RefreshContext from "../../../Context/refresh-context";
import useGet from "../../../Hooks/use-get";
import PostListItem from "../post-list-item";

import "./index.style.scss";

function DisplayAllPosts({ settings }) {
  const { data, loading, error } = useGet(settings);

  return (
    <div id="posts-display" className="flex-column align-center full-width">
      {loading && <>Loading</>}
      {data && (
        <ul className="post-list flex-column align-center gap-lg full-width p-2">
          {data.map((post) => {
            return <PostListItem data={post} key={post.id} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default DisplayAllPosts;
