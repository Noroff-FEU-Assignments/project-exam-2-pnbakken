import React from "react";

function Heading({ content, size = 1 }) {
  const HSize = `h${size}`;
  return <HSize>{content}</HSize>;
}

export default Heading;
