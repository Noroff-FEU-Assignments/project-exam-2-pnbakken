import React from "react";
import PropTypes from "prop-types";

import "./index.style.scss";

function ComponentOpacity({ condition, children, className = "" }) {
  return (
    <div
      className={`component-opacity ${condition ? "show" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

ComponentOpacity.propTypes = {
  condition: PropTypes.bool.isRequired,
  children: PropTypes.node,
};
export default ComponentOpacity;
