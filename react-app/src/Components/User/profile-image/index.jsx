import React from "react";
import PropTypes from "prop-types";

import "./index.style.scss";

function ProfileImage({ src }) {
  return <div className="profile-image"></div>;
}

export default ProfileImage;

ProfileImage.propTypes = {
  src: PropTypes.string,
};
