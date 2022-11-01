import React from "react";
import PropTypes from "prop-types";

import "./index.style.scss";

function Post({ children }) {
  return <div className="post full-width">{children}</div>;
}

export default Post;

Post.propTypes = {
  children: PropTypes.node.isRequired,
};
