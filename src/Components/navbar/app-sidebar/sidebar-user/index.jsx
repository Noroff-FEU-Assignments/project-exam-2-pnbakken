import userEvent from "@testing-library/user-event";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { USER_URL } from "../../../../Constants";
import AuthContext from "../../../../Context/auth-context";
import useGet from "../../../../Hooks/use-get";
import useWindowSize from "../../../../Hooks/use-window-size";
import ProfileImage from "../../../User/profile-image";

import "./index.style.scss";

function SidebarUser() {
  const [auth, setAuth] = useContext(AuthContext);

  const windowSize = useWindowSize();

  const settings = {
    url: `${USER_URL}/${auth.name}`,
  };
  const { data, error, loading } = useGet(settings);
  return (
    <div className="sidebar-user ">
      {auth && (
        <>
          <Link
            to={`/user/${auth.name}`}
            className="user-name light-text flex-c align-center full-width gap-xxs"
          >
            {data && windowSize.innerWidth > 991 && (
              <ProfileImage src={data.avatar} size={76} />
            )}
            {auth.name}
          </Link>
        </>
      )}
    </div>
  );
}

export default SidebarUser;
