import React, { useState } from "react";
import { useContext } from "react";
import { USER_URL } from "../../../Constants";
import AuthContext from "../../../Context/auth-context";
import createAxios from "../../../Functions/create-axios";

import "./index.style.scss";

function Follow({ user }) {
  const [auth, setAuth] = useContext(AuthContext);
  const [disabled, setDisabled] = useState(false);

  const isFollowing = () => {
    let follow = false;
    if (user.followers) {
      user.followers.forEach((f) =>
        f.name === auth.name ? (follow = true) : ""
      );
    }
    return follow;
  };
  const [following, setFollowing] = useState(isFollowing());

  const client = createAxios(auth);
  const url = `${USER_URL}/${user.name}`;

  async function follow() {
    setDisabled(true);
    const followUrl = url + "/follow";
    try {
      const response = await client.put(followUrl);
      response.status === 200 && setFollowing(true);
    } catch (error) {
    } finally {
      setDisabled(false);
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

export default Follow;
