import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../../Context/auth-context";
import useWindowSize from "../../../../Hooks/use-window-size";
import ProfileImage from "../../../User/profile-image";

import "./index.style.scss";

function SidebarUser() {
  //eslint-disable-next-line
  const [auth, setAuth] = useContext(AuthContext);

  const windowSize = useWindowSize();

  return (
    <div className="sidebar-user flex-c align-center ">
      {auth && (
        <>
          <Link
            to={`/user/${auth.name}`}
            className="user-name light-text flex-c align-center full-width gap-xxs"
          >
            {windowSize.innerWidth > 991 && (
              <ProfileImage src={auth.avatar} size={76} />
            )}
            {auth.name}
          </Link>
        </>
      )}
    </div>
  );
}

export default SidebarUser;
