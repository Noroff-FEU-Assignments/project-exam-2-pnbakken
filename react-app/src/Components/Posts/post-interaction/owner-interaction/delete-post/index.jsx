import React, { useContext } from "react";
import PropTypes from "prop-types";
import { ALL_POSTS_URL } from "../../../../../Constants";
import createAxios from "../../../../../Functions/create-axios";
import RefreshContext from "../../../../../Context/refresh-context";

function DeletePost({ id, auth }) {
  const [refresh, setRefresh] = useContext(RefreshContext);
  async function doDelete() {
    try {
      const url = ALL_POSTS_URL + "/" + id;
      const client = createAxios(auth);
      const response = await client.delete(url);
      setRefresh(!refresh);
    } catch (error) {}
  }
  return <button onClick={doDelete}>delete post</button>;
}

DeletePost.propTypes = {
  id: PropTypes.number.isRequired,
  auth: PropTypes.object.isRequired,
};

export default DeletePost;
