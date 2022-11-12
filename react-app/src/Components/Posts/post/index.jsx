import React from "react";
import PropTypes from "prop-types";

import "./index.style.scss";
import { useContext } from "react";
import AuthContext from "../../../Context/auth-context";
import OwnerInteraction from "../post-interaction/owner-interaction";

function Post({ children, data }) {
  const [auth, setAuth] = useContext(AuthContext);
  const isOwner = auth && auth.name === data.author.name ? "owner" : "";

  return (
    <div className={`post full-width ${isOwner} radius-sm`}>
      {isOwner && <OwnerInteraction post={data} />}
      {children}
    </div>
  );
}

Post.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

export default Post;
