import React from "react";
import PropTypes from "prop-types";

function Heading({ children, size = 1, className = "" }) {
  const HSize = `h${size}`;
  return (
    <HSize
      className={`font-brand full-width large-component-width ${className}`}
    >
      {children}
    </HSize>
  );
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
};

export default Heading;
