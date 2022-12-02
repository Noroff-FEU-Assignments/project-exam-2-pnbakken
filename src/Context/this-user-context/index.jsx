import { createContext, useState } from "react";
import { USER_URL } from "../../Constants";
import useGet from "../../Hooks/use-get";

const ThisUserContext = createContext(null, () => {});

export const ThisUserContextProvider = ({ children }) => {
  const [thisUser, setThisUser] = useState(null);

  return (
    <ThisUserContext.Provider value={[thisUser, setThisUser]}>
      {children}
    </ThisUserContext.Provider>
  );
};

export default ThisUserContext;
