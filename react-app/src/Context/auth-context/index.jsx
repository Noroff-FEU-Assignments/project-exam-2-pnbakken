import { createContext } from "react";
import useLocalStorage from "../../Hooks/use-local-storage";
import PropTypes from "prop-types";

const AuthContext = createContext([null, () => {}]);

export const AuthProvider = (props) => {
  const [auth, setAuth] = useLocalStorage("auth", null);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
};

AuthContext.propTypes = {
  children: PropTypes.node,
};

export default AuthContext;
