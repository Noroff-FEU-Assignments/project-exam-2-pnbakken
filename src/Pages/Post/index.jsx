import React from "react";
import { useParams } from "react-router-dom";
import AppInterfaceLayout from "../../Components/Layout/app-interface-layout";
import MainLayout from "../../Components/Layout/main-layout";
import Post from "../../Components/Posts/post";
import PostDetail from "../../Components/Posts/post-detail";
import InteractionPanel from "../../Components/Posts/post-interaction/interaction-panel";
import { POSTS_URL } from "../../Constants";
import useGet from "../../Hooks/use-get";

function SinglePost() {
  const { id } = useParams();

  const singlePostUrlSettings = {
    url: `${POSTS_URL}/${id}?_author=true&_comments=true&_reactions=true`,
  };

  const { data, loading, error } = useGet(singlePostUrlSettings);

  console.log(id);
  return (
    <MainLayout>
      <AppInterfaceLayout>
        <div className="post-container p-5">
          {data && (
            <Post data={data}>
              <InteractionPanel data={data} />
            </Post>
          )}
        </div>
      </AppInterfaceLayout>
    </MainLayout>
  );
}

export default SinglePost;
