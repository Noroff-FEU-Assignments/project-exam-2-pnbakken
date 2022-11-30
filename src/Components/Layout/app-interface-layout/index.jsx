import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../Context/auth-context";
import PropTypes from "prop-types";
import CentralColumn from "../../Design-Components/center-column";
import AppSidebar from "../../navbar/app-sidebar";
import { RefreshProvider } from "../../../Context/refresh-context";
import { Container } from "react-bootstrap";
import { ShowNewPostContextProvider } from "../../../Context/show-new-post-context";

import "./index.style.scss";
import bgImg from "../../../assets/image/app-bg-3.jpg";

function AppInterfaceLayout({ children }) {
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(AuthContext);

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  });

  return (
    <>
      {auth && (
        <ShowNewPostContextProvider>
          <div
            className="app-frame full-height"
            style={{ backgroundImage: `url(${bgImg})` }}
          >
            <div className="app-interface flex-r align-start justify-start full-width full-height top-level-indent">
              <AppSidebar />
              <CentralColumn>
                <RefreshProvider>{children}</RefreshProvider>
              </CentralColumn>
            </div>
          </div>
        </ShowNewPostContextProvider>
      )}
    </>
  );
}

AppInterfaceLayout.propTypes = {
  children: PropTypes.node,
};

export default AppInterfaceLayout;
