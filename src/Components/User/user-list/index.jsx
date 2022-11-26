import React from "react";
import { Link } from "react-router-dom";
import { USER_URL } from "../../../Constants";
import useGet from "../../../Hooks/use-get";
import Follow from "../../Buttons/follow-user";
import ProfileImage from "../profile-image";

function UserList({ users }) {
  const settings = {
    url: USER_URL + "?_followers=true&sort=name&sortOrder=asc&limit=100",
  };
  const { data, loading, error } = useGet(settings);
  return (
    <div className="user-list-container full-width">
      {data && (
        <ul className="user-list flex-c full-width gap-lg">
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
    <li className="user-list-item full-width standard-component-width flex-r align-center justify-between">
      <div className="flex-r gap-sm align-center">
        <ProfileImage src={user.avatar ? user.avatar : ""} />
        <Link to={`/user/${user.name}`}>{user.name}</Link>
      </div>
      <Follow user={user} />
    </li>
  );
}
