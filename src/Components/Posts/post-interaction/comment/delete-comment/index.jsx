import React from "react";
import { useContext } from "react";
import { POSTS_URL } from "../../../../../Constants";
import AuthContext from "../../../../../Context/auth-context";
import createAxios from "../../../../../Functions/create-axios";

function DeleteComment({ postID, commentID }) {
  const url = POSTS_URL + `/${postID}/comment/${commentID}`;
  const [auth, setAuth] = useContext(AuthContext);

  async function doDelete() {
    const client = createAxios(auth);
    try {
      const response = await client.delete(url);
    } catch (error) {
      console.error(error.response);
    }
  }
  return <button onClick={doDelete}>Delete comment</button>;
}

export default DeleteComment;
