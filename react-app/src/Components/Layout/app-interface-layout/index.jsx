import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../Context/auth-context";
import PropTypes from "prop-types";
import CentralColumn from "../../Design-Components/center-column";

import "./index.style.scss";
import AppSidebar from "../../navbar/app-sidebar";

function AppInterfaceLayout({ children }) {
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(AuthContext);

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  });

  return (
    <div className="app-interface grid full-width">
      <AppSidebar />
      <CentralColumn>{children}</CentralColumn>
    </div>
  );
}

export default AppInterfaceLayout;

AppInterfaceLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
