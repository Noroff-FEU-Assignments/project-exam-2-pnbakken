import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";

import "./index.style.scss";
import { Form } from "react-bootstrap";
import createAxios from "../../../../Functions/create-axios";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BootstrapForm from "../../bootstrap-form";
import HistoryContext from "../../../../Context/history-context";
import UserImageHistory from "./user-image-history";

const schema = yup.object().shape({
  imageUrl: yup.string(),
  imageFile: yup.mixed(),
});

function AddImage({ url, handleShow, setImageUrl, className = "" }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      ...(url && { url: url }),
    },
  });
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formError, setFormError] = useState("");
  const [imageString, setImageString] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [formImageUrl, setFormImageUrl] = useState("");

  const [history, setHistory] = useContext(HistoryContext);

  useEffect(() => {
    async function postImage() {
      if (imageString) {
        console.log(imageString);
        try {
        } catch (error) {
          console.error(error);
        }
      }
    }
    postImage();
  }, [imageString]);

  function clearImage() {
    const fileHandler = document.querySelector("#image-file");
    fileHandler.value = "";
    const urlHandler = document.querySelector("#image-url");
    urlHandler.value = "";
    setImageUrl("");
    setImageString("");
    setImageFile(null);
    setFormImageUrl("");
  }

  function setImageFromHistory(e) {
    console.log(e.target.dataset.src);
    setImageUrl(e.target.dataset.src);
    handleShow();
  }

  async function onSubmit(data) {
    setDisabled(true);
    setLoading(true);
    try {
      console.log(data);
      const client = createAxios();
      if (imageFile && data.imageUrl) {
        setFormError("You can only use one of image url or file upload");
      } else if (data.imageUrl) {
        //const result = await doUpload(data.imageUrl);
        try {
          const response = await client.get(data.imageUrl);
          if (response.status === 200) {
            setImageUrl(data.imageUrl);
            setFormImageUrl(data.imageUrl);
            if (history && history.media) {
              const images = history.media;
              images.push(data.imageUrl);
              setHistory({ media: images });
            } else {
              setHistory({ media: [data.imageUrl] });
            }
          } else setFormError("Image must be publically available online");
        } catch (error) {
          setFormError("Image must be publically available online");
        }
      } else if (imageFile) {
        const result = await doUpload(imageFile, setImageUrl);
        console.log(result);
        if (history && history.media) {
          const images = history.media;
          images.push(result.data.url);
          setHistory({ media: images });
        } else {
          setHistory({ media: [result.data.url] });
        }
        handleShow();
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setDisabled(false);
    }
  }

  return (
    <div className="add-image full-width standard-component-width flex-column align-start raise absolute p-3">
      <BootstrapForm
        className="full-width height-fit flex-column gap-xs"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Form.Group>
          <Form.Control
            id="image-url"
            placeholder="Image URL"
            defaultValue={url ? url : ""}
            {...register("imageUrl")}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            id="image-file"
            type="file"
            accept="image/*"
            {...register("imageFile")}
            className="mb-2"
            onChange={(e) => {
              console.log(e);
              convertToBase64(e.target.files[0], setImageString);
              setImageFile(e.target.files[0]);
            }}
          />
          <button type="button" onClick={clearImage}>
            clear image
          </button>
        </Form.Group>
        <div className="flex-row wrap"></div>
        <div className="form-menu flex-row wrap-reverse full-width justify-between">
          <button onClick={handleShow}>Cancel</button>
          {!disabled ? (
            <button type="submit">Add Image</button>
          ) : (
            <>Uploading Image...</>
          )}
        </div>
        {loading && <div>Loading...</div>}
        {formError && <div>{formError}</div>}
        {imageString && (
          <div>
            <img src={imageString} />
          </div>
        )}
        {formImageUrl && (
          <div>
            <img src={formImageUrl} />
          </div>
        )}

        <UserImageHistory handler={setImageUrl} endAction={handleShow} />
      </BootstrapForm>
    </div>
  );
}

AddImage.propTypes = {
  url: PropTypes.string,
  handleShow: PropTypes.func.isRequired,
  setImageUrl: PropTypes.func.isRequired,
};

export default AddImage;

async function testUrl(url) {
  const client = createAxios();
  try {
    const response = await fetch(url);
    console.log(response);
  } catch (error) {
    console.error(error);
    return false;
  }
}

/**
 *
 * @param {} file image file to convert to base64
 * @param {} handle callback function to handle resulting base64 string
 */
async function convertToBase64(file, handle) {
  //Turns out I don't need this but I'll keep it in case I do some other time
  const reader = new FileReader();
  if (file) {
    try {
      reader.onloadend = () => {
        const base64 = reader.result;
        console.log(base64);
        handle(base64);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error(error);
    } finally {
    }
  }
}

/**
 *
 * @param {*} file
 * @param {*} handler
 */
async function doUpload(file, handler) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "rv4f402m");
  const cloud = "dt8j2ptfq";

  const client = createAxios();
  try {
    const response = await client.post(
      `https://api.cloudinary.com/v1_1/${cloud}/image/upload`,
      formData
    );
    console.log(response);
    if (response.status === 200) {
      handler(response.data.url);
      return response;
    }
  } catch (error) {}
}
