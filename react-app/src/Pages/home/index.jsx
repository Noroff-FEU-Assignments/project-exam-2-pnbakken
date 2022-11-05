import React from "react";
import CentralColumn from "../../Components/Design-Components/center-column";
import AppInterfaceLayout from "../../Components/Layout/app-interface-layout";
import MainLayout from "../../Components/Layout/main-layout";
import DisplayAllPosts from "../../Components/Posts/display-all-posts";
import NewPost from "../../Components/Posts/new-post";

function Home() {
  return (
    <MainLayout>
      <AppInterfaceLayout>
        <NewPost />
        <DisplayAllPosts />
      </AppInterfaceLayout>
    </MainLayout>
  );
}

export default Home;
