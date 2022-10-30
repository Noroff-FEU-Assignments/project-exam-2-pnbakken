import React from "react";
import { Route, Routes } from "react-router-dom";
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
      <Route path="/user-page" element={<UserPage />} />
    </Routes>
  );
}

export default PageRoutes;
