import React from "react";
import PropTypes from "prop-types";

import "./index.style.scss";
import { useContext } from "react";
import AuthContext from "../../../Context/auth-context";
import OwnerInteraction from "../post-interaction/owner-interaction";

function Post({ children, data }) {
  const [auth, setAuth] = useContext(AuthContext);
  console.log(data);
  const isOwner = auth && auth.email === data.author.email ? "owner" : "";

  return (
    <div className={`post full-width ${isOwner}`}>
      {isOwner && <OwnerInteraction postID={data.id} />}
      {children}
    </div>
  );
}

export default Post;

Post.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};
