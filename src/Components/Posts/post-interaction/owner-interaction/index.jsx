import React from "react";
import { useContext } from "react";
import { useState } from "react";
import AuthContext from "../../../../Context/auth-context";
import DeletePost from "./delete-post";
import EditPost from "./edit-post";

import menuIcon from "../../../../assets/icon/icon-ellipsis.svg";

function OwnerInteraction({ post, close = () => {} }) {
  const [show, setShow] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);

  function handleSetShow() {
    setShow(!show);
  }
  return (
    <div className="owner-interaction p-3 full-width flex-r gap-md">
      <div className="owner-interaction-menu flex-r full-width justify-between">
        <DeletePost id={post.id} auth={auth} close={close} />
        <EditPost post={post} auth={auth} />
      </div>
    </div>
  );
}

export default OwnerInteraction;
