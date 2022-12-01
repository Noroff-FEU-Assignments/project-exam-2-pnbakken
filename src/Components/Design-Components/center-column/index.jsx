import React from "react";
import PropTypes from "prop-types";

import "./index.style.scss";

function CentralColumn({ children }) {
  return (
    <div
      id="central-column"
      className="flex-c align-center justify-start gap-lg p-2 full-width full-height"
    >
      {children}
    </div>
  );
}

CentralColumn.propTypes = {
  children: PropTypes.node,
};
export default CentralColumn;
