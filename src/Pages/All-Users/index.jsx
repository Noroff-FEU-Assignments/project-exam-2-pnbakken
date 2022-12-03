import React from "react";
import AppInterfaceLayout from "../../Components/Layout/app-interface-layout";
import MainLayout from "../../Components/Layout/main-layout";
import NewPost from "../../Components/Menus/new-post";
import Heading from "../../Components/Typography/heading";
import UserList from "../../Components/User/user-list";
import setPageTitle from "../../Functions/set-page-title";

function AllUsers() {
  setPageTitle("All Users | ");

  return (
    <MainLayout>
      <AppInterfaceLayout>
        <NewPost />
        <Heading>All users</Heading>
        <UserList />
      </AppInterfaceLayout>
    </MainLayout>
  );
}

export default AllUsers;
