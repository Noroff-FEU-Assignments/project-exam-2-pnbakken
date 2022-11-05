import React from "react";
import { Link } from "react-router-dom";

function AppNavbar() {
  return (
    <div className="app-navbar flex-column align-evenly">
      <Link to="/home">Home</Link>
    </div>
  );
}

export default AppNavbar;
