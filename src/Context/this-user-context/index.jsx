import { createContext, useState } from "react";

const ThisUserContext = createContext(null, () => {});
// NOT IN USE
export const ThisUserContextProvider = ({ children }) => {
  const [thisUser, setThisUser] = useState(null);

  return (
    <ThisUserContext.Provider value={[thisUser, setThisUser]}>
      {children}
    </ThisUserContext.Provider>
  );
};

export default ThisUserContext;
