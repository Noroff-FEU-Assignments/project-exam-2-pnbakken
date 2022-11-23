import React from "react";

import "./index.style.scss";

function ClickableWrapper({ onClick, children }) {
  return (
    <button className="clickable discrete full-width p-0" onClick={onClick}>
      {children}
    </button>
  );
}

export default ClickableWrapper;
