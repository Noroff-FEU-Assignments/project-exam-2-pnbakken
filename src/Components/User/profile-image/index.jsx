import React from "react";
import PropTypes from "prop-types";

import "./index.style.scss";

function ProfileImage({ src, size, children }) {
  const style = {
    ...(src && { backgroundImage: `url(${src})` }),
    ...(size && { width: `${size}px`, height: `${size}px` }),
  };

  return (
    <div className="profile-image" style={style}>
      {children}
    </div>
  );
}

ProfileImage.propTypes = {
  src: PropTypes.string,
  size: PropTypes.number,
  children: PropTypes.node,
};

export default ProfileImage;
