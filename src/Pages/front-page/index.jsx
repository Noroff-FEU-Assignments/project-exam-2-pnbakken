import React, { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import FrontPageCTA from "../../Components/CTA/frontpage-cta";
import MainLayout from "../../Components/Layout/main-layout";
import AuthContext from "../../Context/auth-context";
import setPageTitle from "../../Functions/set-page-title";

function FrontPage() {
  setPageTitle();

  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth) {
      navigate("/home");
    }
  });
  return (
    <MainLayout>
      <FrontPageCTA />
    </MainLayout>
  );
}

export default FrontPage;
