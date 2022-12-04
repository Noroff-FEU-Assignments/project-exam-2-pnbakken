import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
//import { USER_URL } from "../../../../Constants";
import AuthContext from "../../../../Context/auth-context";
//import useGet from "../../../../Hooks/use-get";
import useWindowSize from "../../../../Hooks/use-window-size";
import ProfileImage from "../../../User/profile-image";

import "./index.style.scss";

function SidebarUser() {
  //eslint-disable-next-line
  const [auth, setAuth] = useContext(AuthContext);

  const windowSize = useWindowSize();

  //Currently using local auth object to ration calls to the api to avoid getting locked out. The drawback to this is that the user's avatar won't update unless they log out and back in
  // const userUrlSettings = {
  //   url: `${USER_URL}/${auth.name}}`
  // }

  // const {data, loading, error} = useGet(userUrlSettings);

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
