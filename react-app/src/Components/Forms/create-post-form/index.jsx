import React from "react";
import { Button, Form } from "react-bootstrap";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useContext } from "react";
import AuthContext from "../../../Context/auth-context";
import createAxios from "../../../Functions/create-axios";
import getRandomEncouragement from "./string-collection";
import PropTypes from "prop-types";
import AddImageForm from "../add-image-form";
import BootstrapForm from "../bootstrap-form";
import BrandButton from "../../Buttons/brand-button";
import ComponentOpacity from "../../Utility-Components/component-opacity";
import RefreshContext from "../../../Context/refresh-context";
import { HistoryProvider } from "../../../Context/history-context";
import CustomTextArea from "../custom-textarea";
import BetterImageForm from "../better-image-form";

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
  const [refresh, setRefresh] = useContext(RefreshContext);
  function startRunning() {
    setRunning(true);
  }
  function stopRunning() {
    setImageUrl("");
    setRunning(false);
  }
  const [disabled, setDisabled] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);
  const [imageUrl, setImageUrl] = useState(
    edit && edit.media ? edit.media : ""
  );
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
        console.log(imageUrl);
        data.media = imageUrl;
      }
      if (edit) {
        response = await client.put(url, data);
      } else {
        response = await client.post(url, data);
      }
      console.log(response);
      setRefresh(!refresh);
      console.log("refreshed : " + refresh);
    } catch (error) {
      console.error(error);
    } finally {
      setImageUrl("");
      setDisabled(false);
      stopRunning();

      if (close) {
        close();
      }
    }
  }

  return (
    <>
      {showAddImage && (
        <HistoryProvider>
          <BetterImageForm
            edit={edit && edit.media ? edit.media : ""}
            handleShow={handleShowAddImage}
            imageUrlHandler={setImageUrl}
          />
        </HistoryProvider>
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
              {/* <Form.Label>Title</Form.Label> */}
              <Form.Control
                type="text"
                id="new-post-title"
                className="mb-2"
                {...register("title")}
                placeholder="Post Title"
                defaultValue={edit ? edit.title : ""}
              />
              {errors.title ? <>{errors.title.message}</> : <div> </div>}
            </Form.Group>
          </ComponentOpacity>

          <Form.Group className="mb-5">
            <ComponentOpacity condition={running}>
              {/* <Form.Label>Content</Form.Label> */}
            </ComponentOpacity>

            <CustomTextArea
              placeholder={running ? "" : randomEncourage}
              id="new-post-body"
              register={register}
              name="body"
              defaultValue={edit ? edit.body : ""}
            />
          </Form.Group>
          {imageUrl && (
            <div>
              <img src={imageUrl} />
            </div>
          )}
          <div className="new-post-menu flex-row justify-between align-center">
            <ComponentOpacity condition={running}>
              <Button onClick={running ? handleShowAddImage : undefined}>
                Add Image
              </Button>
            </ComponentOpacity>

            <div className="flex-row gap-md align-center">
              <div>
                {edit ? (
                  <button type="button" onClick={close}>
                    Cancel
                  </button>
                ) : (
                  <ComponentOpacity condition={running}>
                    <button type="button" onClick={stopRunning}>
                      Cancel
                    </button>
                  </ComponentOpacity>
                )}
              </div>
              <div>
                {!disabled ? (
                  <BrandButton type="submit">Post</BrandButton>
                ) : (
                  <>Posting</>
                )}
              </div>
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
