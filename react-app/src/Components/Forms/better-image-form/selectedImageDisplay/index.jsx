import React from "react";

function SelectedImageDisplay({ image }) {
  return (
    <div className="selected-image-display">
      <img src={image} />
    </div>
  );
}

export default SelectedImageDisplay;
