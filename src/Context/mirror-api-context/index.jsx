import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ApiMirrorContext = createContext([null, () => {}]);

export const ApiMirrorProvider = ({ children }) => {};

ApiMirrorProvider.propTypes = {
  children: PropTypes.node,
};

export default ApiMirrorContext;
