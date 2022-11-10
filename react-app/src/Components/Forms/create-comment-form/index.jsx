import React from "react";
import { Button, Form } from "react-bootstrap";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import PropTypes from "prop-types";
import createAxios from "../../../Functions/create-axios";
import { useContext } from "react";
import AuthContext from "../../../Context/auth-context";
import BootstrapForm from "../bootstrap-form";

const schema = yup.object().shape({
  body: yup.string().required("Comments can't be emtpy"),
  replyToId: yup.number(),
});

function CreateComment({ url, replyID = null }) {
  const [auth, setAuth] = useContext(AuthContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [disabled, setDisabled] = useState(false);
  const client = createAxios(auth);

  async function onSubmit(data) {
    setDisabled(true);
    console.log(data);
    if (replyID) {
      data.replyToId = replyID;
    }
    try {
      const response = await client.post(url, data);
      console.log(response);
    } catch (error) {
    } finally {
      setDisabled(false);
    }
  }
  return (
    <BootstrapForm onSubmit={handleSubmit(onSubmit)}>
      <fieldset disabled={disabled}>
        <Form.Control as="textarea" {...register("body")} />
        <Button type="submit">Comment</Button>
      </fieldset>
    </BootstrapForm>
  );
}

export default CreateComment;

CreateComment.propTypes = {
  url: PropTypes.string.isRequired,
  reply: PropTypes.bool,
};
