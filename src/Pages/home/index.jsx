import React, { useEffect } from "react";
import { useState } from "react";
import AppInterfaceLayout from "../../Components/Layout/app-interface-layout";
import MainLayout from "../../Components/Layout/main-layout";
import NewPost from "../../Components/Menus/new-post";
import PostFeedSelector from "../../Components/Menus/post-feed-selector";
import DisplayAllPosts from "../../Components/Posts/display-all-posts";
import Heading from "../../Components/Typography/heading";
import { POSTS_URL } from "../../Constants";
import setPageTitle from "../../Functions/set-page-title";

function Home() {
  setPageTitle("Home | ");

  const [urlSettings, setUrlSettings] = useState({
    url: `${POSTS_URL}?_author=true&_reactions=true`,
  });

  const [selectedFeed, setSelectedFeed] = useState("all");
  useEffect(() => {
    if (selectedFeed) {
      switch (selectedFeed) {
        case "following":
          setUrlSettings({
            url: `${POSTS_URL}/following?_author=true&_reactions=true`,
          });
          break;
        case "all":
          setUrlSettings({
            url: `${POSTS_URL}?_author=true&_reactions=true`,
          });
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
        <Heading className="standard-component-width">
          {selectedFeed} posts
        </Heading>
        <DisplayAllPosts settings={urlSettings} feed={selectedFeed} />
      </AppInterfaceLayout>
    </MainLayout>
  );
}

export default Home;
