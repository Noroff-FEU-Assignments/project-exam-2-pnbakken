import React from "react";
import { useContext } from "react";
import { ALL_POSTS_URL } from "../../../../../Constants";
import AuthContext from "../../../../../Context/auth-context";
import createAxios from "../../../../../Functions/create-axios";

function DeleteComment({ postID, commentID }) {
  const url = ALL_POSTS_URL + `/${postID}/comment/${commentID}`;
  const [auth, setAuth] = useContext(AuthContext);

  async function doDelete() {
    const client = createAxios(auth);
    try {
      const response = await client.delete(url);
      console.log(response);
    } catch (error) {
      console.error(error.response);
    }
  }
  return <button onClick={doDelete}>Delete comment</button>;
}

export default DeleteComment;
