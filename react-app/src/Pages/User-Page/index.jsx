import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CentralColumn from "../../Components/Design-Components/center-column";
import AppInterfaceLayout from "../../Components/Layout/app-interface-layout";
import MainLayout from "../../Components/Layout/main-layout";
import DisplayAllPosts from "../../Components/Posts/display-all-posts";
import NewPost from "../../Components/Posts/new-post";
import UserCard from "../../Components/User/user-card";
import { BASE_URL, USER_URL } from "../../Constants";
import useGet from "../../Hooks/use-get";

function UserPage() {
  const { name } = useParams();

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);
  const getUserSettings = {
    url: `${USER_URL}/${name}`,
  };
  const getPostsSettings = {
    url: `${USER_URL}/${name}/posts?_author=true`,
  };

  const { data, loading, error } = useGet(getUserSettings);

  return (
    <MainLayout>
      <AppInterfaceLayout>
        {data && <UserCard user={data} />}
        <NewPost />
        <DisplayAllPosts settings={getPostsSettings} />
      </AppInterfaceLayout>
    </MainLayout>
  );
}

export default UserPage;
