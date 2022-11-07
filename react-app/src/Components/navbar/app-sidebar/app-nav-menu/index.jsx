import React from "react";
import { Link } from "react-router-dom";

function AppNavMenu() {
  return (
    <div className="app-navmenu flex-column ">
      <Link to="/home">Home</Link>
      <Link to="/users">Users</Link>
    </div>
  );
}

export default AppNavMenu;
