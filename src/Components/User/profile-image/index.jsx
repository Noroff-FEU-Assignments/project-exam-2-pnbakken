import React from "react";
import PropTypes from "prop-types";

import "./index.style.scss";

function ProfileImage({ src, children }) {
  const style = {
    ...(src && { backgroundImage: `url(${src})` }),
  };

  return (
    <div className="profile-image" style={style}>
      {children}
    </div>
  );
}

ProfileImage.propTypes = {
  src: PropTypes.string,
  children: PropTypes.node,
};

export default ProfileImage;
