import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ProfileImage from "../profile-image";
import Follow from "../../Buttons/follow-user";

function UserSocial({ user, handleShow, handleSet }) {
  async function handleShowSocial(target) {
    console.log(target);

    switch (target) {
      case "followers":
        handleSet(user.following);
        handleShow();
        break;
      case "following":
        handleSet(user.followers);
        handleShow();
        break;
      default:
        break;
    }
  }
  return (
    <>
      <div className="flex-r gap-sm">
        <button
          onClick={() => {
            handleShowSocial("followers");
          }}
          className="flex-c align-center discrete light-text"
        >
          <span className="brand-text text-md">{user._count.followers}</span>
          <span className="small-text">Followers</span>
        </button>
        <button
          onClick={() => {
            handleShowSocial("following");
          }}
          className="flex-c align-center discrete light-text"
        >
          <span className="brand-text text-md">{user._count.following}</span>
          <span className="small-text">Following</span>
        </button>
      </div>
    </>
  );
}

UserSocial.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserSocial;
