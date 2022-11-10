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
import PropTypes from "prop-types";
import AddImage from "./add-image";
import BSForm from "../bootstrap-form";
import BootstrapForm from "../bootstrap-form";
import BrandButton from "../../Buttons/brand-button";

const schema = yup.object().shape({
  title: yup.string().required("Your post must have a title"),
  body: yup.string(),
  media: yup.string(),
  tags: yup.array(),
});

/**
 * Multi-purpose form for creating and editing posts.
 * @param {url} string use default posts url for create, or provide post id url for editing
 * @param {edit} object to be edited
 *
 * @returns <Form>
 */

function CreatePostForm({ url, edit = null }) {
  const [disabled, setDisabled] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);
  const [imageUrl, setImageUrl] = useState("");
  const [showAddImage, setShowAddImage] = useState(false);
  function handleShowAddImage() {
    setShowAddImage(!showAddImage);
  }

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
      let response = null;
      if (imageUrl) {
        data.media = imageUrl;
      }
      if (edit) {
        response = await client.put(url, data);
      } else {
        response = await client.post(url, data);
      }
      console.log(response);
    } catch (error) {
    } finally {
      setDisabled(false);
    }
  }

  return (
    <>
      {showAddImage && (
        <AddImage
          url={edit && edit.media ? edit.media : ""}
          handleShow={handleShowAddImage}
          setImageUrl={setImageUrl}
        />
      )}
      <BootstrapForm
        id="new-post-form"
        onSubmit={handleSubmit(onSubmit)}
        className="flex-column align-center full-width"
      >
        <fieldset
          disabled={disabled}
          className="full-width standard-component-width p-4 radius-sm"
        >
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              id="new-post-title"
              placeholder="Title"
              className="mb-2"
              {...register("title")}
              defaultValue={edit ? edit.title : ""}
            />
            {errors.title && <>{errors.title.message}</>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              placeholder={getRandomEncouragement()}
              id="new-post-body"
              {...register("body")}
              defaultValue={edit ? edit.body : ""}
            />
          </Form.Group>
          {imageUrl && (
            <div>
              <img src={imageUrl} />
            </div>
          )}
          <div className="new-post-menu flex-row justify-between">
            <Button onClick={handleShowAddImage}>Add Image</Button>

            <BrandButton type="submit">Post</BrandButton>
          </div>
        </fieldset>
      </BootstrapForm>
    </>
  );
}

CreatePostForm.propTypes = {
  url: PropTypes.string.isRequired,
  edit: PropTypes.object,
};
export default CreatePostForm;
