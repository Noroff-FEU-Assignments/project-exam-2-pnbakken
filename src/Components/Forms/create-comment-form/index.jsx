import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import createAxios from "../../../Functions/create-axios";
import { useContext } from "react";
import AuthContext from "../../../Context/auth-context";
import BootstrapForm from "../bootstrap-form";
import RefreshContext from "../../../Context/refresh-context";
import CustomTextArea from "../Form-Components/custom-textarea";
import DisplayResponseErrors from "../../Message/display-response-errors";

const BODY_LIMIT = 280;

function CreateComment({ url, replyID = null, close }) {
  //eslint-disable-next-line
  const [auth, setAuth] = useContext(AuthContext);
  const [refresh, setRefresh] = useContext(RefreshContext);
  const [formError, setFormError] = useState(null);

  const [disabled, setDisabled] = useState(false);
  const client = createAxios(auth);

  const [currentBodyLength, setCurrentBodyLength] = useState(0);
  const updateCurrentBodyLength = (e) => {
    const length = e.target.value.length;
    setCurrentBodyLength(length);
  };

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
          await client.post(url, data);
          setFormError(null);
          setRefresh(!refresh);
          close && close();
        } catch (error) {
          console.error(error);
          setFormError(error);
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
      <fieldset disabled={disabled} className="flex-c p-3 radius-sm gap-sm">
        <CustomTextArea
          as="textarea"
          id={inputId}
          name="body"
          placeholder="Leave a comment"
          maxLength={BODY_LIMIT}
          onKeyUp={updateCurrentBodyLength}
        />
        <div className="flex-r full-width justify-end align-end">
          <span className={currentBodyLength < BODY_LIMIT ? "small-text" : ""}>
            {currentBodyLength}
          </span>
          /{BODY_LIMIT}
        </div>
        {formError && (
          <DisplayResponseErrors data={formError.response.data.errors} />
        )}
        <div className="flex-r justify-end">
          <button className="system-button" type="submit">
            Comment
          </button>
        </div>
      </fieldset>
    </BootstrapForm>
  );
}

CreateComment.propTypes = {
  url: PropTypes.string.isRequired,
  replyID: PropTypes.number,
};

export default CreateComment;
