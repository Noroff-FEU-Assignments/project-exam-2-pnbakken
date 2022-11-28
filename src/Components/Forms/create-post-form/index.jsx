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
import BootstrapForm from "../bootstrap-form";
import BrandButton from "../../Buttons/brand-button";
import RefreshContext from "../../../Context/refresh-context";
import { HistoryProvider } from "../../../Context/history-context";
import CustomTextArea from "../Form-Components/custom-textarea";
import BetterImageForm from "../better-image-form";
import TagInput from "../Form-Components/tag-input";

const BODY_LIMIT = 280;

const schema = yup.object().shape({
  title: yup.string().required("Your post must have a title"),
  body: yup
    .string()
    .max(BODY_LIMIT, "Post body cannot be more than 280 characters"),
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

function CreatePostForm({
  url,
  edit = null,
  close,
  postBodyId = "new-post-body",
}) {
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

  const [tags, setTags] = useState([]);
  const [imageUrl, setImageUrl] = useState(
    edit && edit.media ? edit.media : ""
  );
  const [showAddImage, setShowAddImage] = useState(false);
  function handleShowAddImage() {
    setShowAddImage(!showAddImage);
  }

  const [currentBodyLength, setCurrentBodyLength] = useState(0);
  const updateCurrentBodyLength = (e) => {
    const length = e.target.value.length;
    setCurrentBodyLength(length);
  };
  const [currentTitleLength, setCurrentTitleLength] = useState(0);
  const updateCurrentTitleLength = (e) => {
    const length = e.target.value.length;
    setCurrentTitleLength(length);
  };

  const randomEncourage = getRandomEncouragement();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onClose() {
    const form = document.querySelector("#new-post-form");
    form.querySelector("#new-post-title").value = "";
    form.querySelector(`#${postBodyId}`).value = "";
    stopRunning();
    if (close) {
      close();
    }
  }

  async function onSubmit(data) {
    setDisabled(true);
    const postBody = document.querySelector(`#${postBodyId}`).value;
    const client = createAxios(auth);

    try {
      let response = null;
      if (imageUrl) {
        data.media = imageUrl;
      }
      if (postBody) {
        data.body = postBody;
      }
      if (tags) {
        data.tags = tags;
      }
      if (edit) {
        response = await client.put(url, data);
      } else {
        response = await client.post(url, data);
      }
      setRefresh(!refresh);
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
      <BootstrapForm
        id="new-post-form"
        onSubmit={handleSubmit(onSubmit)}
        className="flex-c align-center full-width"
      >
        <fieldset
          disabled={disabled || showAddImage}
          className={`full-width standard-component-width p-4 radius-sm ${
            running ? "running" : ""
          }`}
          onFocus={startRunning}
        >
          <Form.Group className="mb-3">
            {/* <Form.Label>Title</Form.Label> */}
            <Form.Control
              type="text"
              id="new-post-title"
              className="mb-2"
              {...register("title")}
              placeholder="Post Title *required"
              defaultValue={edit ? edit.title : ""}
              maxLength={BODY_LIMIT}
              onChange={updateCurrentTitleLength}
            />
            <div className="flex-r full-width justify-end align-end">
              <span
                className={currentTitleLength < BODY_LIMIT ? "small-text" : ""}
              >
                {currentTitleLength}
              </span>
              /{BODY_LIMIT}
            </div>
            {errors.title ? <>{errors.title.message}</> : <div> </div>}
          </Form.Group>

          <Form.Group className="mb-3">
            <CustomTextArea
              placeholder="Post Body"
              id={postBodyId}
              name="body"
              defaultValue={edit && edit.body ? edit.body : ""}
              maxlength={BODY_LIMIT}
              onKeyUp={updateCurrentBodyLength}
            />
            <div className="flex-r full-width justify-end align-end">
              <span
                className={currentBodyLength < BODY_LIMIT ? "small-text" : ""}
              >
                {currentBodyLength}
              </span>
              /{BODY_LIMIT}
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            {/* <Form.Label>Tags (separate with ",")</Form.Label> */}

            <TagInput
              tagHandler={setTags}
              edit={edit && edit.tags ? edit.tags : []}
            />
          </Form.Group>

          {imageUrl && (
            <div>
              <img src={imageUrl} />
            </div>
          )}
          <div className="new-post-menu flex-r wrap justify-between align-center">
            <Button onClick={handleShowAddImage}>Add Image</Button>

            <div className="flex-r gap-md align-center">
              <div>
                {edit ? (
                  <button type="button" onClick={close}>
                    Cancel
                  </button>
                ) : (
                  <button type="button" onClick={onClose}>
                    Cancel
                  </button>
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
      {showAddImage && (
        <HistoryProvider>
          <BetterImageForm
            edit={edit && edit.media ? edit.media : ""}
            handleShow={handleShowAddImage}
            imageUrlHandler={setImageUrl}
          />
        </HistoryProvider>
      )}
    </>
  );
}

CreatePostForm.propTypes = {
  url: PropTypes.string.isRequired,
  edit: PropTypes.object,
};
export default CreatePostForm;
