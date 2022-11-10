import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "./index.style.scss";
import { Form } from "react-bootstrap";
import createAxios from "../../../../Functions/create-axios";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import BootstrapForm from "../../bootstrap-form";

const schema = yup.object().shape({
  imageUrl: yup.string(),
  imageFile: yup.mixed(),
});

function AddImage({ url, handleShow, setImageUrl }) {
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
  const [formError, setFormError] = useState("");
  const [imageString, setImageString] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [formImageUrl, setFormImageUrl] = useState("");

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

  async function onSubmit(data) {
    console.log(data);
    const client = createAxios();
    if (imageString) {
      const result = await doUpload(imageString);
      console.log(result);
    } else if (data.imageUrl) {
      //const result = await doUpload(data.imageUrl);
      try {
        const response = await client.get(data.imageUrl);
        if (response.status === 200) {
          setImageUrl(data.imageUrl);
          setFormImageUrl(data.imageUrl);
        } else setFormError("Image must be publically available online");
      } catch (error) {
        setFormError("Image must be publically available online");
      }
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
            }}
          />
          <button onClick={clearImageFile}>clear image</button>
        </Form.Group>
        <div className="form-menu flex-row full-width justify-between">
          <button onClick={handleShow}>Cancel</button>
          <button type="submit">Add Image</button>
        </div>
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
        {formError && <div>{formError}</div>}
      </BootstrapForm>
    </div>
  );
}

export default AddImage;

AddImage.propTypes = {
  url: PropTypes.string,
  handleShow: PropTypes.func.isRequired,
  setImageUrl: PropTypes.func.isRequired,
};

function clearImageFile(event) {
  event.preventDefault();
  const fileHandler = document.querySelector("#image-file");
  fileHandler.value = "";
}

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

async function doUpload(fileString) {
  const IMGBB_KEY = "fb73b8f580e50eb2027f3610d53f531e";
  const client = createAxios();

  const url = ` http://freeimage.host/api/1/upload/?key=6d207e02198a847aa98d0a2a901485a5`;
  try {
    const response = await client.post(url);
    console.log(response);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}
