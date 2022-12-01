import React, { useState } from "react";
import { useParams } from "react-router-dom";
import AppInterfaceLayout from "../../Components/Layout/app-interface-layout";
import MainLayout from "../../Components/Layout/main-layout";
import NewPost from "../../Components/Menus/new-post";
import UserList from "../../Components/User/user-list";

function AllUsers() {
  const { limit } = useParams();
  console.log(limit);
  const [displayLimited, setDisplayLimited] = useState(limit ? limit : "");

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
