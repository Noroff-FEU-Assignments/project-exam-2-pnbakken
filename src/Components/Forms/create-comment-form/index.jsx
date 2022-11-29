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
import RefreshContext from "../../../Context/refresh-context";
import CustomTextArea from "../Form-Components/custom-textarea";

function CreateComment({ url, replyID = null }) {
  const [auth, setAuth] = useContext(AuthContext);
  const [refresh, setRefresh] = useContext(RefreshContext);
  const [formError, setFormError] = useState(null);

  const [disabled, setDisabled] = useState(false);
  const client = createAxios(auth);

  const inputId = replyID ? "reply-body" : "comment-body";
  async function onSubmit(e) {
    e.preventDefault();
    setDisabled(true);
    const commentBody = document.querySelector(`#${inputId}`).value;
    try {
      if (commentBody) {
        const data = {
          body: commentBody,
          ...(replyID && { replyToId: replyID }),
        };

        try {
          const response = await client.post(url, data);
          setRefresh(!refresh);
        } catch (error) {
          console.error(error);
        }
      } else {
        setFormError("You can't leave an empty comment");
      }
    } catch (error) {
      console.error(error);
      setFormError(error.toString());
    } finally {
      setDisabled(false);
    }
  }
  return (
    <BootstrapForm onSubmit={onSubmit}>
      <fieldset disabled={disabled}>
        <CustomTextArea
          as="textarea"
          id={inputId}
          name="body"
          placeholder="Leave a comment"
        />
        <Button type="submit">Comment</Button>
      </fieldset>
    </BootstrapForm>
  );
}

CreateComment.propTypes = {
  url: PropTypes.string.isRequired,
  reply: PropTypes.bool,
};

export default CreateComment;
