import React from "react";
import { useContext } from "react";
import { useState } from "react";
import AuthContext from "../../../../Context/auth-context";
import DeletePost from "./delete-post";
import EditPost from "./edit-post";

import menuIcon from "../../../../assets/icon/icon-ellipsis.svg";

function OwnerInteraction({ post }) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);

  function handleSetShow() {
    setShow(!show);
  }
  return (
    <div className="owner-interaction p-3 full-width flex-row justify-end gap-md">
      {show && (
        <div className="owner-interaction-menu flex-row full-width justify-between">
          <EditPost post={post} auth={auth} />
          <DeletePost id={post.id} auth={auth} />
        </div>
      )}
      <div className="">
        <button onClick={handleSetShow} className="discrete">
          <img src={menuIcon} alt="menu" />
        </button>
      </div>
    </div>
  );
}

export default OwnerInteraction;
