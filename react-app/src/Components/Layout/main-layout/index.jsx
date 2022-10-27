import React from "react";
import Footer from "./footer";
import Header from "./header";
import Main from "./main";

function Layout() {
  return (
    <div id="page-layout">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Layout;
