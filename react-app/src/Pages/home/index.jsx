import React, { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../../Components/Layout/main-layout";
import AuthContext from "../../Context/auth-context";

function Home() {
  const [auth, sethAuth] = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  });

  return <MainLayout>This is the main layout</MainLayout>;
}

export default Home;
