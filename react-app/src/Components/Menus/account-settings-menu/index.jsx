import React, { useContext, useState } from "react";
import { useEffect } from "react";
import AuthContext from "../../../Context/auth-context";

function AccountSettingsMenu({ user }) {
  const [auth, setAuth] = useContext(AuthContext);
  const [error, setError] = useState("");

  useEffect(() => {
    if (auth) {
      if (auth.name !== user.name) {
        setError(`You're not ${user.name}`);
      }
    }
  }, [auth, user]);

  return (
    <div className="account-settings-menu full-width flex-column align-center">
      {!error && (
        <ul className="flex-column full-width standard-component-width gap-md">
          <li className="menu-item full-width">
            <button className="discrete">Edit Profile Image</button>
          </li>
          <li className="menu-item full-width">
            <button className="discrete">Edit Banner Image</button>
          </li>
        </ul>
      )}
      {error && <>{error}</>}
    </div>
  );
}

export default AccountSettingsMenu;
