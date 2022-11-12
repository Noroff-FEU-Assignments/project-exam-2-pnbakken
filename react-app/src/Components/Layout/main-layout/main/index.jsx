import React from "react";
import PropTypes from "prop-types";

function Main({ children }) {
  return <main className="top-level-indent">{children}</main>;
}

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
