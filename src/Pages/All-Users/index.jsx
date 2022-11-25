import React from "react";
import AppInterfaceLayout from "../../Components/Layout/app-interface-layout";
import MainLayout from "../../Components/Layout/main-layout";
import NewPost from "../../Components/Menus/new-post";
import UserList from "../../Components/User/user-list";

function AllUsers() {
  return (
    <MainLayout>
      <AppInterfaceLayout>
        <NewPost />
        <UserList />
      </AppInterfaceLayout>
    </MainLayout>
  );
}

export default AllUsers;
