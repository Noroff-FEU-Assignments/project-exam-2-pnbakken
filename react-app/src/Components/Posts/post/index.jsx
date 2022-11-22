import React from "react";
import PropTypes from "prop-types";

import "./index.style.scss";
import { useContext } from "react";
import AuthContext from "../../../Context/auth-context";
import OwnerInteraction from "../post-interaction/owner-interaction";
import PostContent from "./post-content";
import ClickableWrapper from "../../Utility-Components/clickable-wrapper";
import PostFooter from "./post-footer";

function Post({ children, data, close }) {
  const [auth, setAuth] = useContext(AuthContext);
  const isOwner = auth && auth.name === data.author.name ? "owner" : "";

  return (
    <div className={`post full-width ${isOwner} radius-sm flex-c gap-md`}>
      {isOwner && <OwnerInteraction post={data} />}
      {close && (
        <button type="button" className="discrete" onClick={close}>
          Close
        </button>
      )}
      <PostContent data={data} />
      {children}
    </div>
  );
}

Post.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

export default Post;
