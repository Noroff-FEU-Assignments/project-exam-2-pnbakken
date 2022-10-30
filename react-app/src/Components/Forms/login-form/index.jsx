import React, { useContext, useState } from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthContext from "../../../Context/auth-context";
import createAxios from "../../../Functions/create-axios";
import { LOGIN_URL } from "../../../Constants";
import InputError from "../../Message/input-error";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Please enter an email"),
  password: yup
    .string()
    .min(8, "Password must be min. 8 characters")
    .required("Please enter a password"),
});

function LoginForm() {
  const [auth, setAuth] = useContext(AuthContext);
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    console.log(data);
    setDisabled(true);

    try {
      const client = createAxios();
      const response = await client.post(LOGIN_URL, data);
      console.log(response);
      if (response.status === 200) {
        setAuth(response.data);
        navigate("/home");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setDisabled(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <fieldset disabled={disabled}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            id="email"
            placeholder="Email"
            {...register("email")}
          />
          {errors.email && <InputError>{errors.email.message}</InputError>}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <InputError>{errors.password.message}</InputError>
          )}
        </Form.Group>
        <Button type="submit">Log In</Button>
      </fieldset>
    </Form>
  );
}

export default LoginForm;
