import React from "react";
import PropTypes from "prop-types";
import { ALL_POSTS_URL } from "../../../../../Constants";
import createAxios from "../../../../../Functions/create-axios";

function DeletePost({ id, auth }) {
  async function doDelete() {
    try {
      const url = ALL_POSTS_URL + "/" + id;
      const client = createAxios(auth);
      const response = await client.delete(url);
    } catch (error) {}
  }
  return <button onClick={doDelete}>delete post</button>;
}

DeletePost.propTypes = {
  id: PropTypes.number.isRequired,
  auth: PropTypes.object.isRequired,
};

export default DeletePost;
