import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BrandButton from "../../Components/Buttons/brand-button";
import LoginForm from "../../Components/Forms/login-form";
import MainLayout from "../../Components/Layout/main-layout";
import Heading from "../../Components/Typography/heading";
import AuthContext from "../../Context/auth-context";
import setPageTitle from "../../Functions/set-page-title";

function Login() {
  setPageTitle("Login | ");
  const navigate = useNavigate();
  //eslint-disable-next-line
  const [auth, setAuth] = useContext(AuthContext);

  useEffect(() => {
    if (auth) {
      navigate("/home");
    }
  });
  return (
    <MainLayout>
      <div className="flex-c top-level-indent full-width align-center gap-lg">
        <Heading>Log In</Heading>
        <LoginForm />
        <div className="flex-c gap-xs">
          <span>Don't have an account? </span>
          <Link to="/register">
            <BrandButton>Register</BrandButton>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}

export default Login;
