import React from "react";
import { useContext } from "react";
import { ALL_POSTS_URL } from "../../../Constants";
import AuthContext from "../../../Context/auth-context";
import createAxios from "../../../Functions/create-axios";
import BootstrapForm from "../bootstrap-form";

function ReactionForm({ postID }) {
  const url = `${ALL_POSTS_URL}/posts/${postID}/react`;
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <BootstrapForm>
      <fieldset>
        <div className="symbols flex--row wrap gap-sm align-center"></div>
      </fieldset>
    </BootstrapForm>
  );
}

export default ReactionForm;
