import React from "react";
import PropTypes from "prop-types";

import "./index.style.scss";

function ComponentOpacity({ condition, children }) {
  return (
    <div className={`component-opacity ${condition ? "show" : ""}`}>
      {children}
    </div>
  );
}

export default ComponentOpacity;

ComponentOpacity.propTypes = {
  condition: PropTypes.bool.isRequired,
  children: PropTypes.node,
};
