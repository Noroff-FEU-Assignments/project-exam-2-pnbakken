import React from "react";
import AppNavbar from "../../../navbar/app-navbar";
import SidebarUser from "./sidebar-user";

function AppSidebar() {
  return (
    <div className="sidebar grid justify-start">
      <SidebarUser />
      <AppNavbar />
    </div>
  );
}

export default AppSidebar;
