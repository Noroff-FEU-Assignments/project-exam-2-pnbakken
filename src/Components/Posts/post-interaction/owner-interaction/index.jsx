import React from "react";
import { useContext } from "react";
import AuthContext from "../../../../Context/auth-context";
import DeletePost from "./delete-post";
import EditPost from "./edit-post";
import PropTypes from "prop-types";

function OwnerInteraction({ post, close = () => {} }) {
  //eslint-disable-next-line
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <div className="owner-interaction p-3 full-width flex-r gap-md">
      <div className="owner-interaction-menu flex-r full-width justify-between">
        <DeletePost id={post.id} auth={auth} close={close} />
        <EditPost post={post} auth={auth} />
      </div>
    </div>
  );
}

OwnerInteraction.propTypes = {
  post: PropTypes.object.isRequired,
  close: PropTypes.func,
};

export default OwnerInteraction;
