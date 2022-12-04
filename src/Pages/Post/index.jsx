import React from "react";
import { useParams } from "react-router-dom";
import AppInterfaceLayout from "../../Components/Layout/app-interface-layout";
import MainLayout from "../../Components/Layout/main-layout";
import DisplayResponseErrors from "../../Components/Message/display-response-errors";
import Post from "../../Components/Posts/post";
import InteractionPanel from "../../Components/Posts/post-interaction/interaction-panel";
import { POSTS_URL } from "../../Constants";
import useGet from "../../Hooks/use-get";

function SinglePost() {
  const { id } = useParams();

  const singlePostUrlSettings = {
    url: `${POSTS_URL}/${id}?_author=true&_comments=true&_reactions=true`,
  };

  const { data, loading, error } = useGet(singlePostUrlSettings);

  return (
    <MainLayout>
      <AppInterfaceLayout>
        <div className="post-container p-5">
          {data && (
            <Post data={data}>
              <InteractionPanel data={data} />
            </Post>
          )}
          {loading && <>Loading</>}
          {error && <DisplayResponseErrors data={error.response.data.errors} />}
        </div>
      </AppInterfaceLayout>
    </MainLayout>
  );
}

export default SinglePost;
