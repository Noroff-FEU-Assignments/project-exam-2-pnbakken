import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../Components/Forms/login-form";
import MainLayout from "../../Components/Layout/main-layout";
import AuthContext from "../../Context/auth-context";

function Login() {
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(AuthContext);

  useEffect(() => {
    if (auth) {
      navigate("/home");
    }
  });
  return (
    <MainLayout>
      <LoginForm />
    </MainLayout>
  );
}

export default Login;
