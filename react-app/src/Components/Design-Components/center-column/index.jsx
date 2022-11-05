import React from "react";
import PropTypes from "prop-types";

import "./index.style.scss";

function CentralColumn({ children }) {
  return (
    <div
      id="central-column"
      className="flex-column align-center justify-self-end gap-lg p-2"
    >
      {children}
    </div>
  );
}

export default CentralColumn;

CentralColumn.propTypes = {
  children: PropTypes.node,
};
