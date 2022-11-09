import React from "react";
import { useParams } from "react-router-dom";
import AppInterfaceLayout from "../../Components/Layout/app-interface-layout";
import MainLayout from "../../Components/Layout/main-layout";
import { BASE_URL, USER_URL } from "../../Constants";
import useGet from "../../Hooks/use-get";

function UserPage() {
  const { user } = useParams();
  const settings = {
    url: `${USER_URL}/${user}}`,
  };
  const { data, loading, error } = useGet(settings);

  return (
    <MainLayout>
      <AppInterfaceLayout>User page</AppInterfaceLayout>
    </MainLayout>
  );
}

export default UserPage;
