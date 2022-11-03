import React from "react";
import PropTypes from "prop-types";

import "./index.style.scss";

function Post({ children, className = "" }) {
  return <div className={`post full-width ${className}`}>{children}</div>;
}

export default Post;

Post.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
