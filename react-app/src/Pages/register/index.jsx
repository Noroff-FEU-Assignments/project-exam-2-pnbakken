import React from "react";
import RegisterForm from "../../Components/Forms/register-form";
import MainLayout from "../../Components/Layout/main-layout";
import DecorativeText from "../../Components/Typography/decorative-text";

function Register() {
  return (
    <MainLayout>
      <DecorativeText>More encouragement!</DecorativeText>
      <RegisterForm />
    </MainLayout>
  );
}

export default Register;
