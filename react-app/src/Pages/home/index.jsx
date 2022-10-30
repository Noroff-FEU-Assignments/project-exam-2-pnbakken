import React, { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CentralColumn from "../../Components/Design-Components/center-column";
import MainLayout from "../../Components/Layout/main-layout";
import DisplayAllPosts from "../../Components/Posts/display-all-posts";
import AuthContext from "../../Context/auth-context";

function Home() {
  const [auth, sethAuth] = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  });

  return (
    <MainLayout>
      <CentralColumn>
        <DisplayAllPosts />
      </CentralColumn>
    </MainLayout>
  );
}

export default Home;
