import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../Context/auth-context";
import PropTypes from "prop-types";
import CentralColumn from "../../Design-Components/center-column";

import "./index.style.scss";
import AppSidebar from "../../navbar/app-sidebar";
import { RefreshProvider } from "../../../Context/refresh-context";
import { Container } from "react-bootstrap";
import { ShowNewPostContextProvider } from "../../../Context/show-new-post-context";

function AppInterfaceLayout({ children }) {
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(AuthContext);

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  });

  return (
    <div className="">
      {auth && (
        <div className="app-interface grid full-width">
          <ShowNewPostContextProvider>
            <AppSidebar />
            <CentralColumn>
              <RefreshProvider>{children}</RefreshProvider>
            </CentralColumn>
          </ShowNewPostContextProvider>
        </div>
      )}
    </div>
  );
}

AppInterfaceLayout.propTypes = {
  children: PropTypes.node,
};

export default AppInterfaceLayout;
