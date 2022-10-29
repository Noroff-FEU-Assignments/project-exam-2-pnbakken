import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useWindowSize from "../../../Hooks/use-window-size";

function DecorativeText({ children, size = 80 }) {
  const windowSize = useWindowSize();
  const [fontSize, setFontSize] = useState(size);

  useEffect(() => {
    if (windowSize.innerWidth <= 768 && windowSize.innerWidth > 425) {
      setFontSize(80);
    } else if (windowSize.innerWidth <= 425) {
      setFontSize(64);
    } /* else if (windowSize.innerWidth > 768) */ else {
      setFontSize(size);
    }
  }, [windowSize, size]);

  return (
    <div
      className="decorative-text"
      style={{
        fontSize: `${fontSize}px`,
      }}
    >
      {children}
    </div>
  );
}

export default DecorativeText;

DecorativeText.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number,
};
