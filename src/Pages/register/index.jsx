import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../../Components/Forms/register-form";
import MainLayout from "../../Components/Layout/main-layout";
import DecorativeText from "../../Components/Typography/decorative-text";
import Heading from "../../Components/Typography/heading";
import AuthContext from "../../Context/auth-context";
import setPageTitle from "../../Functions/set-page-title";

function Register() {
  setPageTitle("Register | ");
  //eslint-disable-next-line
  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth) {
      navigate("/home");
    }
  });
  return (
    <MainLayout>
      <div className="flex-c top-level-indent full-width pb-5">
        <div className="flex-c full-width align-center gap-lg">
          <DecorativeText>More encouragement!</DecorativeText>
          <Heading>Register</Heading>
          <div className="flex-c full-width standard-component-width gap-sm">
            <RegisterForm />
            <div className="flex-r gap-xs">
              <span>Already have an account?</span>
              <Link to="/login" className="primary-text">
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Register;
