import { createContext, useState } from "react";

const ShowNewPostContext = createContext(null, () => {});

export const ShowNewPostContextProvider = ({ children }) => {
  const [showNewPost, setShowNewPost] = useState(false);

  return (
    <ShowNewPostContext.Provider value={[showNewPost, setShowNewPost]}>
      {children}
    </ShowNewPostContext.Provider>
  );
};

export default ShowNewPostContext;
