import React, { useState } from "react";
import { useEffect } from "react";

/**
 *
 * @returns Window width and height after resize
 */
function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return windowSize;
}

export default useWindowSize;

function getWindowSize() {
  console.log(window);
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

// Inspired by https://bobbyhadz.com/blog/react-get-window-width-height
