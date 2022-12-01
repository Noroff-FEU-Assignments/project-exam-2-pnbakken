import React from "react";
import PropTypes from "prop-types";

import "./index.style.scss";
import { useContext } from "react";
import AuthContext from "../../../Context/auth-context";
import OwnerInteraction from "../post-interaction/owner-interaction";
import PostContent from "./post-content";

function Post({ children, data, close }) {
  const [auth, setAuth] = useContext(AuthContext);
  const isOwner = auth && auth.email === data.author.email ? "owner" : "";

  return (
    <div
      className={`post full-width standard-component-width ${isOwner} radius-sm flex-c gap-md`}
    >
      {close && (
        <button type="button" className="discrete close-button" onClick={close}>
          Close
        </button>
      )}
      <PostContent data={data} isOwner={isOwner} />
      {children}
    </div>
  );
}

Post.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

export default Post;
