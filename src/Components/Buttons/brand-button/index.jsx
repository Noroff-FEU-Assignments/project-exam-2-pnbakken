import React from "react";
import PropTypes from "prop-types";

import "./index.style.scss";

function BrandButton({ children, onClick, type, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`brand-button ${className}`}
      type={type}
    >
      {children}
    </button>
  );
}

BrandButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default BrandButton;
