import React from "react";
import AppNavMenu from "./app-nav-menu";
import SidebarUser from "./sidebar-user";

function AppSidebar() {
  return (
    <div className="sidebar flex-column justify-start">
      <SidebarUser />
      <AppNavMenu />
    </div>
  );
}

export default AppSidebar;
