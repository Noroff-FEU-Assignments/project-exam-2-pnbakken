import { createContext } from "react";
import PropTypes from "prop-types";

const ApiMirrorContext = createContext([null, () => {}]);
//NOT IN USE

export const ApiMirrorProvider = ({ children }) => {};

ApiMirrorProvider.propTypes = {
  children: PropTypes.node,
};

export default ApiMirrorContext;
