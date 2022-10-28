import React from "react";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import AuthContext from "../../Context/auth-context";
import FrontPage from "../front-page";
import Home from "../home";
import Register from "../register";

function PageRoutes() {
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<FrontPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default PageRoutes;
