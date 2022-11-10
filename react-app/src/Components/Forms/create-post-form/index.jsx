import React, { Component } from "react";
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
import ComponentOpacity from "../../Utility-Components/component-opacity";

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

function CreatePostForm({ url, edit = null, close }) {
  const [running, setRunning] = useState(edit ? true : false);
  function startRunning() {
    setRunning(true);
  }
  function stopRunning() {
    setRunning(false);
  }
  const [disabled, setDisabled] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);
  const [imageUrl, setImageUrl] = useState("");
  const [showAddImage, setShowAddImage] = useState(false);
  function handleShowAddImage() {
    setShowAddImage(!showAddImage);
  }
  const randomEncourage = getRandomEncouragement();

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
      stopRunning();
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
          className={`full-width standard-component-width p-4 radius-sm ${
            running ? "running" : ""
          }`}
          onFocus={startRunning}
        >
          <ComponentOpacity condition={running}>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                id="new-post-title"
                className="mb-2"
                {...register("title")}
                defaultValue={edit ? edit.title : ""}
              />
              {errors.title && <>{errors.title.message}</>}
            </Form.Group>
          </ComponentOpacity>

          <Form.Group>
            <ComponentOpacity condition={running}>
              <Form.Label>Content</Form.Label>
            </ComponentOpacity>

            <Form.Control
              as="textarea"
              placeholder={running ? "" : randomEncourage}
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
            <ComponentOpacity condition={running}>
              <Button onClick={handleShowAddImage}>Add Image</Button>
            </ComponentOpacity>

            <div className="flex-row gap-md">
              {edit ? (
                <button onClick={close}>Cancel</button>
              ) : (
                <ComponentOpacity condition={running}>
                  <button onClick={stopRunning}>Cancel</button>
                </ComponentOpacity>
              )}

              {running || edit ? (
                <BrandButton type="submit">Post</BrandButton>
              ) : (
                <BrandButton onClick={startRunning}>Post</BrandButton>
              )}
            </div>
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
