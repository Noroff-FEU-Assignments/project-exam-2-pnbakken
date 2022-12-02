import React, { useEffect } from "react";
import { useState } from "react";
import ImageCarousel from "../../Components/Design-Components/image-carousel";
import AppInterfaceLayout from "../../Components/Layout/app-interface-layout";
import MainLayout from "../../Components/Layout/main-layout";
import NewPost from "../../Components/Menus/new-post";
import PostFeedSelector from "../../Components/Menus/post-feed-selector";
import DisplayAllPosts from "../../Components/Posts/display-all-posts";
import { POSTS_URL } from "../../Constants";

function Home() {
  const RATE_LIMIT = 50;
  const [offset, setOffset] = useState(0);

  const [urlSettings, setUrlSettings] = useState({
    url: `${POSTS_URL}?_author=true&limit=${RATE_LIMIT}&offset=${offset}`,
  });

  const [selectedFeed, setSelectedFeed] = useState("all");
  useEffect(() => {
    if (selectedFeed) {
      switch (selectedFeed) {
        case "following":
          setOffset(0);
          setUrlSettings({
            url: `${POSTS_URL}/following?_author=true&limit=${RATE_LIMIT}&offset=${offset}`,
          });
          break;
        case "all":
          setOffset(0);
          setUrlSettings({
            url: `${POSTS_URL}?_author=true&limit=${RATE_LIMIT}&offset=${offset}`,
          });
          break;
        default:
          break;
      }
    }
  }, [selectedFeed]);

  useEffect(() => {
    setUrlSettings(() => {
      if (selectedFeed === "following") {
        return {
          url: `${POSTS_URL}/following?_author=true&limit=${RATE_LIMIT}&offset=${offset}`,
        };
      } else if (selectedFeed === "all") {
        return {
          url: `${POSTS_URL}?_author=true&limit=${RATE_LIMIT}&offset=${offset}`,
        };
      }
    });
  }, [offset]);

  const loadNext = () => {
    setOffset(offset + RATE_LIMIT);

    window.scrollTo(0, 0);
  };

  const loadLast = () => {
    setOffset(offset - RATE_LIMIT);
  };

  return (
    <MainLayout>
      <AppInterfaceLayout>
        <NewPost />
        <PostFeedSelector
          getSelection={setSelectedFeed}
          currentSelection={selectedFeed}
        />
        <div className="flex-r full-width standard-component-width justify-between">
          <div>
            {offset > 0 && <button onClick={loadLast}>Load Previous</button>}
          </div>
          <div>
            <button onClick={loadNext}>Load Next</button>
          </div>
        </div>
        <DisplayAllPosts settings={urlSettings} />
        <div className="flex-r full-width standard-component-width justify-between">
          <div>
            {offset > 0 && <button onClick={loadLast}>Load Previous</button>}
          </div>
          <div>
            <button onClick={loadNext}>Load Next</button>
          </div>
        </div>
        <ImageCarousel />
      </AppInterfaceLayout>
    </MainLayout>
  );
}

export default Home;
