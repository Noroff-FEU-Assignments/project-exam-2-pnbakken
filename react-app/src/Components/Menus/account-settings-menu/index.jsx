import React from "react";

function AccountSettingsMenu() {
  return (
    <div className="account-settings-menu full-width">
      <ul className="flex-column full-width standard-component-width gap-md">
        <li className="menu-item full-width">
          <button className="discrete">Edit Profile Image</button>
        </li>
        <li className="menu-item full-width">
          <button className="discrete">Edit Banner Image</button>
        </li>
      </ul>
    </div>
  );
}

export default AccountSettingsMenu;
