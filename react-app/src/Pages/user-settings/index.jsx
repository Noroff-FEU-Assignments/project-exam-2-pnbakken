import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import CentralColumn from "../../Components/Design-Components/center-column";
import AppInterfaceLayout from "../../Components/Layout/app-interface-layout";
import MainLayout from "../../Components/Layout/main-layout";
import AccountSettingsMenu from "../../Components/Menus/account-settings-menu";
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
        <CentralColumn>
          {loading && <>Loading...</>}
          {data && <AccountSettingsMenu user={data} />}
        </CentralColumn>
      </AppInterfaceLayout>
    </MainLayout>
  );
}

export default UserSettings;
