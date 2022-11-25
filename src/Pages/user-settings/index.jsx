import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import CentralColumn from "../../Components/Design-Components/center-column";
import AppInterfaceLayout from "../../Components/Layout/app-interface-layout";
import MainLayout from "../../Components/Layout/main-layout";
import AccountSettingsMenu from "../../Components/Menus/account-settings-menu";
import NewPost from "../../Components/Menus/new-post";
import UserCard from "../../Components/User/user-card";
import { USER_URL } from "../../Constants";
import AuthContext from "../../Context/auth-context";
import useGet from "../../Hooks/use-get";

function UserSettings() {
  const { name } = useParams();
  const userUrl = {
    url: USER_URL + `/${name}`,
  };
  const { data, loading, error } = useGet(userUrl);

  return (
    <MainLayout>
      <AppInterfaceLayout>
        <NewPost />
        <CentralColumn>
          {loading && <>Loading...</>}
          {data && <UserCard user={data} />}
          {data && <AccountSettingsMenu user={data} />}
        </CentralColumn>
      </AppInterfaceLayout>
    </MainLayout>
  );
}

export default UserSettings;
