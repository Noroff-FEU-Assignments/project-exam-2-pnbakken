import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../../Components/Forms/register-form";
import MainLayout from "../../Components/Layout/main-layout";
import DecorativeText from "../../Components/Typography/decorative-text";
import AuthContext from "../../Context/auth-context";

function Register() {
  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (auth) {
      navigate("/home");
    }
  });
  return (
    <MainLayout>
      <DecorativeText>More encouragement!</DecorativeText>
      <RegisterForm />
    </MainLayout>
  );
}

export default Register;
