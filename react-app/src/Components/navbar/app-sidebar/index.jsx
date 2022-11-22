import React from "react";
import AppNavMenu from "./app-nav-menu";
import SidebarUser from "./sidebar-user";

import "./index.style.scss";

function AppSidebar() {
  return (
    <div className="app-sidebar flex-c justify-start">
      <SidebarUser />
      <AppNavMenu />
    </div>
  );
}

export default AppSidebar;
