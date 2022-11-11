import { useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";

const RefreshContext = createContext([null, () => {}]);

export const RefreshProvider = (props) => {
  const [refresh, setRefresh] = useState(false);

  return <RefreshContext.Provider>{props.children}</RefreshContext.Provider>;
};

RefreshProvider.propTypes = {
  children: PropTypes.node,
};

export default RefreshContext;
