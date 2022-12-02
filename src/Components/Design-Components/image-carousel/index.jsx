import React, { useEffect } from "react";
import PropTypes from "prop-types";
import validImageUrl from "../../../Functions/valid-image-url";

function ImageCarousel({ posts }) {
  const images = async () => {
    if (posts) {
      let imgArray = [];

      posts.map(async (post) => {
        if (post.media) {
          if (await validImageUrl(post.media)) {
            imgArray.push(post.media);
          }
        }
      });
      console.log(imgArray);
      return imgArray;
    }
  };

  return (
    <div className="image-carousel full-width smaller-component-width">
      <ul className="image-list flex-row wrap gap-sm"></ul>
    </div>
  );
}

export default ImageCarousel;

ImageCarousel.propTypes = {
  posts: PropTypes.array.isRequired,
};
