import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AppInterfaceLayout from "../../Components/Layout/app-interface-layout";
import MainLayout from "../../Components/Layout/main-layout";
import ContactList from "../../Components/Menus/contact-list";
import NewPost from "../../Components/Menus/new-post";
import DisplayResponseErrors from "../../Components/Message/display-response-errors";
import DisplayAllPosts from "../../Components/Posts/display-all-posts";
import Heading from "../../Components/Typography/heading";
import UserBanner from "../../Components/User/user-banner";
import ScrollToTop from "../../Components/Utility-Components/scroll-to-top";
import { USER_URL } from "../../Constants";
import setPageTitle from "../../Functions/set-page-title";
import useGet from "../../Hooks/use-get";

function UserPage() {
  const { name } = useParams();

  setPageTitle(`${name} | `);

  const getUserSettings = {
    url: `${USER_URL}/${name}?_following=true&_followers=true`,
  };
  const getPostsSettings = {
    url: `${USER_URL}/${name}/posts?_author=true&_reactions=true`,
  };

  const { data, loading, error } = useGet(getUserSettings);

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
          {data && (
            <>
              <UserBanner
                user={data}
                handleShowSocial={handleShowSocial}
                handleSocialSet={handleSocialSet}
              />
              {showSocial && socialSet && (
                <ContactList
                  contacts={socialSet}
                  handleShow={handleShowSocial}
                />
              )}
              <Heading>{data.name}</Heading>
              <DisplayAllPosts settings={getPostsSettings} />
            </>
          )}
          {loading && <>Loading</>}
          {error && <DisplayResponseErrors data={error.response.data.errors} />}
        </AppInterfaceLayout>
      </MainLayout>
    </ScrollToTop>
  );
}

export default UserPage;
