import React from "react";
import { Link } from "react-router-dom";

function AppNavbar() {
  return (
    <div className="app-navbar flex-column align-center ">
      <Link to="/home">Home</Link>
      <Link to="/users">Users</Link>
    </div>
  );
}

export default AppNavbar;
