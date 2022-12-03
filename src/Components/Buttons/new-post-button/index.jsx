import React, { useContext } from "react";
import ShowNewPostContext from "../../../Context/show-new-post-context";
import useWindowSize from "../../../Hooks/use-window-size";
import BrandButton from "../brand-button";

import "./index.style.scss";
import iconPlus from "../../../assets/icon/icon-plus.svg";
function NewPostButton() {
  //eslint-disable-next-line
  const [showNewPost, setShowNewPost] = useContext(ShowNewPostContext);
  const windowSize = useWindowSize();

  function openNewPost() {
    setShowNewPost(true);
  }
  return (
    <>
      {windowSize.innerWidth > 991 ? (
        <BrandButton
          className="new-post-button"
          onClick={openNewPost}
          value="new post"
        >
          Post
        </BrandButton>
      ) : (
        <BrandButton
          className="new-post-button"
          onClick={openNewPost}
          value="new-post"
        >
          <div
            className="flex-c full-width full-height align-center justify-center"
            style={{ backgroundImage: `url(${iconPlus})` }}
          ></div>
        </BrandButton>
      )}
    </>
  );
}

export default NewPostButton;
