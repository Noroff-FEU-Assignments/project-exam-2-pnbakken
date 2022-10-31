import React from "react";
import PropTypes from "prop-types";

function ProfileImage({ src }) {
  return <div className="profile-image" style={{ backgroundImage: `` }}></div>;
}

export default ProfileImage;

ProfileImage.propTypes = {
  src: PropTypes.string,
};
