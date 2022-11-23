import React from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "../../Components/Utility-Components/scroll-to-top";
import AllUsers from "../All-Users";
import FrontPage from "../front-page";
import Home from "../home";
import Login from "../login";
import Register from "../register";
import UserPage from "../User-Page";
import UserSettings from "../user-settings";

function PageRoutes() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:name" element={<UserPage />} />
        <Route path="/user/:name/settings" element={<UserSettings />} />
        <Route path="/users" element={<AllUsers />} />
      </Routes>
    </ScrollToTop>
  );
}

export default PageRoutes;
