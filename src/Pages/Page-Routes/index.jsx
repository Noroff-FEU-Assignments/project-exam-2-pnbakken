import React from "react";
import { Route, Routes } from "react-router-dom";
import AllUsers from "../All-Users";
import FrontPage from "../front-page";
import Home from "../home";
import Login from "../login";
import Register from "../register";
import SinglePost from "../Post";
import UserPage from "../User-Page";
import UserSettings from "../user-settings";

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/home" element={<Home />} />
      {/* {<Route path="/single-post/:id" element={<SinglePost />} />} */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />

      <Route path="/user/:name" element={<UserPage />} />

      <Route path="/user/:name/settings" element={<UserSettings />} />
      <Route path="/users" element={<AllUsers />} />
      <Route path="/users:limit" element={<AllUsers />} />
    </Routes>
  );
}

export default PageRoutes;
