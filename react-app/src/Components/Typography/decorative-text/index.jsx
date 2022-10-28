import React, { useState } from "react";
import PropTypes from "prop-types";
import useWindowSize from "../../../Hooks/use-window-size";

function DecorativeText({ children, size = 80 }) {
  const windowSize = useWindowSize();

  return (
    <span
      className="decorative-text"
      style={{ fontSize: windowSize.innerWidth >= 425 ? `${size}px` : `80px` }}
    >
      {children}
    </span>
  );
}

export default DecorativeText;

DecorativeText.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number,
};
