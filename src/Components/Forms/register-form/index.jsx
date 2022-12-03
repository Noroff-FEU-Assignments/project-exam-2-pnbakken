import React, { useContext, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthContext from "../../../Context/auth-context";
import createAxios from "../../../Functions/create-axios";
import { LOGIN_URL, REGISTER_URL } from "../../../Constants";
import DisplayResponseErrors from "../../Message/display-response-errors";
import InputError from "../../Message/input-error";
import { useNavigate } from "react-router-dom";
import BootstrapForm from "../bootstrap-form";
import BrandButton from "../../Buttons/brand-button";

const schema = yup.object().shape({
  username: yup.string().required("Please enter a username"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter an email"),
  password: yup
    .string()
    .required("Please enter a password")
    .min(8, "Password must be at least 8 characters"),
  confirmPassword: yup.string().required("Please confirm your password"),
});

function RegisterForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [auth, setAuth] = useContext(AuthContext);
  const [disabled, setDisabled] = useState(false);
  const [responseError, setResponseError] = useState(null);
  const navigate = useNavigate();

  async function onSubmit(data) {
    setDisabled(true);
    setResponseError(null);
    const userData = {
      name: data.username,
      email: data.email,
      password: data.password,
    };

    try {
      const client = createAxios();
      const response = await client.post(REGISTER_URL, userData);
      if (response.status === 201) {
        const loginResponse = await client.post(LOGIN_URL, {
          email: userData.email,
          password: userData.password,
        });
        if (loginResponse.status === 200) {
          setAuth(loginResponse.data);
          navigate("/home");
        }
      }
    } catch (error) {
      console.error(error.response.data.errors);
      setResponseError(error.response.data.errors);
    } finally {
      setDisabled(false);
    }
  }
  return (
    <BootstrapForm onSubmit={handleSubmit(onSubmit)}>
      <fieldset disabled={disabled} className="p-3 radius-md">
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            id="username"
            {...register("username")}
            className="mb-1"
          />
          {errors.username && (
            <InputError>{errors.username.message}</InputError>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>
            Email (Must be a valid @stud.noroff.no address)
          </Form.Label>
          <Form.Control
            type="email"
            id="email"
            {...register("email")}
            className="mb-1"
          />
          {errors.email && <InputError>{errors.email.message}</InputError>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            {...register("password")}
            className="mb-1"
          />
          {errors.password && (
            <InputError>{errors.password.message}</InputError>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            id="confirm-password"
            {...register("confirmPassword")}
            className="mb-1"
          />
          {errors.confirmPassword && (
            <InputError>{errors.confirmPassword.message}</InputError>
          )}
        </Form.Group>
        {responseError && <DisplayResponseErrors data={responseError} />}
        <div className="flex-r full-width justify-end">
          <BrandButton type="submit">Submit</BrandButton>
        </div>
      </fieldset>
    </BootstrapForm>
  );
}

export default RegisterForm;
