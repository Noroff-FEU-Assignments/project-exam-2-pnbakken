import React from "react";
import { Route, Routes } from "react-router-dom";
import AllUsers from "../All-Users";
import FrontPage from "../front-page";
import Home from "../home";
import Login from "../login";
import Register from "../register";
import UserPage from "../User-Page";

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user/:name" element={<UserPage />} />
      <Route path="/users" element={<AllUsers />} />
    </Routes>
  );
}

export default PageRoutes;
