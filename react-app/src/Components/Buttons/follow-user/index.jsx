import React from "react";
import { useContext } from "react";
import { USER_URL } from "../../../Constants";
import AuthContext from "../../../Context/auth-context";
import createAxios from "../../../Functions/create-axios";

function Follow({ user }) {
  const [auth, setAuth] = useContext(AuthContext);
  const following = () => {
    let follow = false;
    user.followers.forEach((f) =>
      f.name === auth.name ? (follow = true) : ""
    );
    return follow;
  };
  console.log("Following: " + following());

  const client = createAxios(auth);
  const url = `${USER_URL}/${user.name}`;

  async function follow() {
    const followUrl = url + "/follow";
    try {
      const response = await client.put(followUrl);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  async function unfollow() {
    const unfollowUrl = url + "/unfollow";
    try {
      const response = await client.put(unfollowUrl);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button onClick={following() ? unfollow : follow}>
      {following() ? "Unfollow" : "Follow"}
    </button>
  );
}

export default Follow;
