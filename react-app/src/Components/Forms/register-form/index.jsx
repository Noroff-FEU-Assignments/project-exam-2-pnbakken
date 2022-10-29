import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  username: yup.string().required("Please enter a username"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Please enter an email address"),
  password: yup.string().required("Please enter a password"),
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

  function onSubmit(data) {
    console.log(data);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            id="username"
            {...register("username")}
            className="mb-1"
          />
          {errors.username && errors.username.message}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            id="email"
            {...register("email")}
            className="mb-1"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            id="password"
            {...register("password")}
            className="mb-1"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            id="confirm-password"
            {...register("confirmPassword")}
            className="mb-1"
          />
        </Form.Group>
        <Button type="submit">Submit</Button>
      </fieldset>
    </Form>
  );
}

export default RegisterForm;
