import React from "react";
import { useParams } from "react-router-dom";
import AppInterfaceLayout from "../../Components/Layout/app-interface-layout";
import MainLayout from "../../Components/Layout/main-layout";
import BetterProfileImageMenu from "../../Components/Menus/better-profile-image-menu";
import NewPost from "../../Components/Menus/new-post";
import DisplayResponseErrors from "../../Components/Message/display-response-errors";
import UserBanner from "../../Components/User/user-banner";
import { USER_URL } from "../../Constants";
import setPageTitle from "../../Functions/set-page-title";
import useGet from "../../Hooks/use-get";

function UserSettings() {
  const { name } = useParams();

  setPageTitle(`${name} settings | `);
  const userUrl = {
    url: USER_URL + `/${name}`,
  };
  const { data, loading, error } = useGet(userUrl);

  return (
    <MainLayout>
      <AppInterfaceLayout>
        <NewPost />

        {loading && <>Loading...</>}
        {data && (
          <>
            <UserBanner user={data} />
            <BetterProfileImageMenu user={data} />
          </>
        )}
        {error && <DisplayResponseErrors data={error.response.data.errors} />}
      </AppInterfaceLayout>
    </MainLayout>
  );
}

export default UserSettings;
