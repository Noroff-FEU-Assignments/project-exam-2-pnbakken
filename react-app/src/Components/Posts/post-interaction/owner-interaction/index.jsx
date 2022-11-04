import React from "react";
import { useContext } from "react";
import { useState } from "react";
import AuthContext from "../../../../Context/auth-context";
import DeletePost from "./delete-post";
import EditPost from "./edit-post";

function OwnerInteraction({ postID }) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);

  function handleSetShow() {
    setShow(!show);
  }
  return (
    <div className="owner-interaction p-3">
      <div className="full-size flex-row justify-end">
        <button onClick={handleSetShow}>menu</button>
      </div>
      {show && (
        <div className="owner-interaction-menu">
          <EditPost id={postID} auth={auth} />
          <DeletePost id={postID} auth={auth} />
        </div>
      )}
    </div>
  );
}

export default OwnerInteraction;
