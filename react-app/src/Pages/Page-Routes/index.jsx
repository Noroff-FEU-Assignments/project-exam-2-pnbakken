import React from "react";
import { Route, Routes } from "react-router-dom";
import FrontPage from "../front-page";
import Home from "../home";
import Login from "../login";
import Register from "../register";

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default PageRoutes;
