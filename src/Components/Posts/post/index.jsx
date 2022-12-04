import React from "react";
import PropTypes from "prop-types";

import "./index.style.scss";
import { useContext } from "react";
import AuthContext from "../../../Context/auth-context";
import PostContent from "./post-content";

function Post({ children, data, close, handleShow, isOpen = false }) {
  //eslint-disable-next-line
  const [auth, setAuth] = useContext(AuthContext);
  const isOwner = auth && auth.email === data.author.email ? true : false;

  return (
    <div
      className={`post full-width standard-component-width ${
        isOwner && "owner"
      } radius-sm flex-c gap-md`}
    >
      {isOpen && (
        <button type="button" className="discrete close-button" onClick={close}>
          Close
        </button>
      )}
      <PostContent
        data={data}
        isOwner={isOwner}
        handleShow={handleShow ? handleShow : undefined}
      />
      {children}
    </div>
  );
}

Post.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  close: PropTypes.func,
  handleShow: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default Post;
