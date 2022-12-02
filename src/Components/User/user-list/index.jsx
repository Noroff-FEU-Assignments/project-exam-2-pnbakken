import React from "react";
import { Link } from "react-router-dom";
import { USER_URL } from "../../../Constants";
import useGet from "../../../Hooks/use-get";
import Follow from "../../Buttons/follow-user";
import ProfileImage from "../profile-image";

import "./index.style.scss";

function UserList({ users }) {
  const settings = {
    url: USER_URL + "?_followers=true&sort=name&sortOrder=asc&limit=100",
  };
  const { data, loading, error } = useGet(settings);
  return (
    <div className="user-list-container full-width large-component-width align-center">
      {data && (
        <ul className="user-list flex-r wrap full-width gap-lg justify-evenly">
          {data.map((user) => {
            return <UserListItem user={user} />;
          })}
        </ul>
      )}
    </div>
  );
}

export default UserList;

function UserListItem({ user }) {
  return (
    <li className="user-list-item  standard-component-width flex-c align-center justify-between gap-sm radius-md">
      <div className="flex-c gap-sm align-center">
        <Link
          to={`/user/${user.name}`}
          className="flex-c align-center light-text"
        >
          <ProfileImage src={user.avatar ? user.avatar : ""} />
          <span className="user-name">{user.name}</span>
        </Link>
      </div>
      <Follow user={user} />
    </li>
  );
}
