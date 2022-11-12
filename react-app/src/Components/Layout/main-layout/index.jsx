import React from "react";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";
import PropTypes from "prop-types";

import "./main-layout.style.scss";

function MainLayout({ children }) {
  return (
    <div id="main-page-layout">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
