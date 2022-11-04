import React from "react";
import { Button, Form } from "react-bootstrap";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../../../Context/auth-context";
import createAxios from "../../../Functions/create-axios";
import { ALL_POSTS_URL } from "../../../Constants";
import getRandomEncouragement from "./string-collection";

const schema = yup.object().shape({
  title: yup.string(),
  body: yup.string(),
  media: yup.string(),
  tags: yup.array(),
});

function CreatePostForm() {
  const [disabled, setDisabled] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setDisabled(true);
    console.log(data);

    const client = createAxios(auth);

    try {
      const response = await client.post(ALL_POSTS_URL, data);
      console.log(response);
    } catch (error) {
    } finally {
      setDisabled(false);
    }
  }

  return (
    <Form id="new-post-form" onSubmit={handleSubmit(onSubmit)}>
      <fieldset disabled={disabled}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            id="new-post-title"
            placeholder="Title"
            {...register("title")}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            placeholder={getRandomEncouragement()}
            id="new-post-body"
            {...register("body")}
          />
        </Form.Group>
      </fieldset>
      <div className="new-post-menu flex-row justify-between">
        <Button>Add Image</Button>
        <Button type="submit">Post</Button>
      </div>
    </Form>
  );
}

export default CreatePostForm;
