import React, { useState } from "react";
import { useContext } from "react";
import { USER_URL } from "../../../Constants";
import AuthContext from "../../../Context/auth-context";
import createAxios from "../../../Functions/create-axios";
import PropTypes from "prop-types";

import "./index.style.scss";
import RefreshContext from "../../../Context/refresh-context";

function Follow({ otherUser }) {
  //eslint-disable-next-line
  const [auth, setAuth] = useContext(AuthContext);
  const [disabled, setDisabled] = useState(false);
  const [refresh, setRefresh] = useContext(RefreshContext);

  const isFollowing = () => {
    let follower = false;
    if (otherUser.followers) {
      otherUser.followers.forEach((f) => {
        if (f.name === auth.name) {
          follower = true;
        }
      });
    }
    return follower;
  };

  const [following, setFollowing] = useState(isFollowing());
  const client = createAxios(auth);
  const url = `${USER_URL}/${otherUser.name}`;

  async function follow() {
    setDisabled(true);
    const followUrl = url + "/follow";
    try {
      const response = await client.put(followUrl);
      response.status === 200 && setFollowing(true);
    } catch (error) {
    } finally {
      setDisabled(false);
      setRefresh(!refresh);
    }
  }

  async function unfollow() {
    setDisabled(true);
    const unfollowUrl = url + "/unfollow";
    try {
      const response = await client.put(unfollowUrl);
      response.status === 200 && setFollowing(false);
    } catch (error) {
      console.error(error);
    } finally {
      setDisabled(false);
      setRefresh(!refresh);
    }
  }

  return (
    <button
      onClick={following ? unfollow : follow}
      disabled={disabled}
      className={`discrete follow-button  ${following ? "following" : ""}`}
    >
      {following ? "Unfollow" : "Follow"}
    </button>
  );
}

Follow.propTypes = {
  otherUser: PropTypes.object.isRequired,
};

export default Follow;
