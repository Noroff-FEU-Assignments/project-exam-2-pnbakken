import React from "react";
import DeleteUser from "../../../Buttons/delete-user";

import "./index.style.scss";

function Footer() {
  return (
    <footer>
      Just Post - version <code>{process.env.REACT_APP_VERSION}</code>
    </footer>
  );
}

export default Footer;
