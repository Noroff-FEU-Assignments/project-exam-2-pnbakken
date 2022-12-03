import React from "react";
import PropTypes from "prop-types";

function SelectedImageDisplay({ image }) {
  return (
    <div className="selected-image-display">
      <img src={image} alt="your selection" />
    </div>
  );
}

SelectedImageDisplay.propTypes = {
  image: PropTypes.string.isRequired,
};

export default SelectedImageDisplay;
