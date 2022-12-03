import React, { useContext, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import AppInterfaceLayout from "../../Components/Layout/app-interface-layout";
import MainLayout from "../../Components/Layout/main-layout";
import ContactList from "../../Components/Menus/contact-list";
import NewPost from "../../Components/Menus/new-post";
import DisplayAllPosts from "../../Components/Posts/display-all-posts";
import Heading from "../../Components/Typography/heading";
import UserCard from "../../Components/User/user-card";
import ScrollToTop from "../../Components/Utility-Components/scroll-to-top";
import { USER_URL } from "../../Constants";
import AuthContext from "../../Context/auth-context";
import useGet from "../../Hooks/use-get";

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

  const [showSocial, setShowSocial] = useState(false);
  const handleShowSocial = () => setShowSocial(!showSocial);
  const [socialSet, setSocialSet] = useState();
  const handleSocialSet = (set) => {
    setSocialSet(set);
  };

  return (
    <ScrollToTop>
      <MainLayout>
        <AppInterfaceLayout>
          <NewPost />
          {user && (
            <>
              <UserCard
                user={user}
                handleShowSocial={handleShowSocial}
                handleSocialSet={handleSocialSet}
              />
              {showSocial && socialSet && (
                <ContactList
                  contacts={socialSet}
                  handleShow={handleShowSocial}
                />
              )}
              <Heading>{user.name}</Heading>
              <DisplayAllPosts settings={getPostsSettings} />
            </>
          )}
        </AppInterfaceLayout>
      </MainLayout>
    </ScrollToTop>
  );
}

export default UserPage;
