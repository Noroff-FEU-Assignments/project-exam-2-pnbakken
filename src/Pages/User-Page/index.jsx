import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import AppInterfaceLayout from "../../Components/Layout/app-interface-layout";
import MainLayout from "../../Components/Layout/main-layout";
import NewPost from "../../Components/Menus/new-post";
import DisplayAllPosts from "../../Components/Posts/display-all-posts";
import UserCard from "../../Components/User/user-card";
import { USER_URL } from "../../Constants";
import useGet from "../../Hooks/use-get";

function UserPage() {
  const { name } = useParams();

  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState(null);
  const getUserSettings = {
    url: `${USER_URL}/${name}?_following=true&_followers=true`,
  };
  const getPostsSettings = {
    url: `${USER_URL}/${name}/posts?_author=true`,
  };

  const { data, loading, error } = useGet(getUserSettings);
  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  return (
    <MainLayout>
      <AppInterfaceLayout>
        <NewPost />
        {user && <UserCard user={user} />}
        {user && <DisplayAllPosts settings={getPostsSettings} />}
      </AppInterfaceLayout>
    </MainLayout>
  );
}

export default UserPage;
