import React, { useEffect } from "react";
import { useState } from "react";
import AppInterfaceLayout from "../../Components/Layout/app-interface-layout";
import MainLayout from "../../Components/Layout/main-layout";
import NewPost from "../../Components/Menus/new-post";
import PostFeedSelector from "../../Components/Menus/post-feed-selector";
import DisplayAllPosts from "../../Components/Posts/display-all-posts";
import { POSTS_URL } from "../../Constants";

function Home() {
  const [urlSettings, setUrlSettings] = useState({
    url: `${POSTS_URL}?_author=true`,
  });
  const [selectedFeed, setSelectedFeed] = useState("all");
  useEffect(() => {
    if (selectedFeed) {
      switch (selectedFeed) {
        case "following":
          setUrlSettings({ url: `${POSTS_URL}/following?_author=true` });
          break;
        case "all":
          setUrlSettings({ url: `${POSTS_URL}?_author=true` });
          break;
        default:
          break;
      }
    }
  }, [selectedFeed]);

  return (
    <MainLayout>
      <AppInterfaceLayout>
        <NewPost />
        <PostFeedSelector
          getSelection={setSelectedFeed}
          currentSelection={selectedFeed}
        />
        <DisplayAllPosts settings={urlSettings} />
      </AppInterfaceLayout>
    </MainLayout>
  );
}

export default Home;
