import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useSearchParams } from "react-router-dom";
import AppInterfaceLayout from "../../Components/Layout/app-interface-layout";
import MainLayout from "../../Components/Layout/main-layout";
import NewPost from "../../Components/Menus/new-post";
import DisplayAllPosts from "../../Components/Posts/display-all-posts";
import UserCard from "../../Components/User/user-card";
import { USER_URL } from "../../Constants";
import AuthContext from "../../Context/auth-context";
import useGet from "../../Hooks/use-get";

import editIcon from "../../assets/icon/icon-edit.svg";

function UserPage() {
  const { name } = useParams();
  const [auth, setAuth] = useContext(AuthContext);
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
        <Link
          to={`/user/${auth.name}/settings`}
          className="flex-c align-center small-text full-width"
        >
          <img src={editIcon} alt="edit profile images" />
          <span>Profile Images</span>
        </Link>
        {user && <DisplayAllPosts settings={getPostsSettings} />}
      </AppInterfaceLayout>
    </MainLayout>
  );
}

export default UserPage;
