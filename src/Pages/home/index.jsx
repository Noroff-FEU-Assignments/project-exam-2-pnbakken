import React from "react";
import { useState } from "react";
import CentralColumn from "../../Components/Design-Components/center-column";
import AppInterfaceLayout from "../../Components/Layout/app-interface-layout";
import MainLayout from "../../Components/Layout/main-layout";
import PostFeedSelector from "../../Components/Menus/post-feed-selector";
import DisplayAllPosts from "../../Components/Posts/display-all-posts";
import NewPost from "../../Components/Posts/new-post";
import { ALL_POSTS_URL } from "../../Constants";

function Home() {
  const [selectedFeed, setSelectedFeed] = useState("followers");
  const settings = {
    url: ALL_POSTS_URL + "?_author=true",
  };
  return (
    <MainLayout>
      <AppInterfaceLayout>
        <NewPost />
        <PostFeedSelector getChoice={setSelectedFeed} />
        <DisplayAllPosts settings={settings} />
      </AppInterfaceLayout>
    </MainLayout>
  );
}

export default Home;
