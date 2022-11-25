import React, { useContext } from "react";
import ShowNewPostContext from "../../../Context/show-new-post-context";
import BrandButton from "../brand-button";

function NewPostButton() {
  const [showNewPost, setShowNewPost] = useContext(ShowNewPostContext);

  function openNewPost() {
    console.log("Opening new post");
    setShowNewPost(true);
  }
  return <BrandButton onClick={openNewPost}>Post</BrandButton>;
}

export default NewPostButton;
