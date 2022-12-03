import React from "react";
import PropTypes from "prop-types";

import "./index.style.scss";

function ComponentOpacity({ condition, children, className = "" }) {
  //NOT IN USE
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
  className: PropTypes.string,
};
export default ComponentOpacity;
