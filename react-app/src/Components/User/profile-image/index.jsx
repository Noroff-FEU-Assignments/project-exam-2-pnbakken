import React from "react";
import PropTypes from "prop-types";

import "./index.style.scss";

function ProfileImage({ src }) {
  const style = {
    ...(src && { backgroundImage: `url(${src})` }),
  };

  return <div className="profile-image" style={style}></div>;
}

ProfileImage.propTypes = {
  src: PropTypes.string,
};

export default ProfileImage;
