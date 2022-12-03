import React from "react";

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

export default Heading;
