import React from "react";
import PropTypes from "prop-types";

import "./index.style.scss";
import defaultAvatar from "../../../assets/image/default-avatar.png";

function ProfileImage({ src, size, children }) {
  const style = {
    backgroundImage: `url(${src ? src : defaultAvatar})`,
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
