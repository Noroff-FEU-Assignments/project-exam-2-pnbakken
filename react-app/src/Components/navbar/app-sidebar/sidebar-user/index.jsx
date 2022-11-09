import userEvent from "@testing-library/user-event";
import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../../Context/auth-context";

function SidebarUser() {
  const [auth, setAuth] = useContext(AuthContext);
  return (
    <div className="align-self-start">
      {auth && <Link to={`/user/${auth.name}`}>{auth.name}</Link>}
    </div>
  );
}

export default SidebarUser;
