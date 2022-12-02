import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { USER_URL } from "../../../Constants";
import AuthContext from "../../../Context/auth-context";
import useGet from "../../../Hooks/use-get";
import Follow from "../../Buttons/follow-user";
import SetApiOffset from "../../Utility-Components/set-api-offset";
import ProfileImage from "../profile-image";

import "./index.style.scss";

function UserList({ users }) {
  const RATE_LIMIT = 50;
  const [offset, setOffset] = useState(0);
  const [limitReached, setLimitReached] = useState(false);

  const defaultUrl = USER_URL + "?_followers=true&sort=name&sortOrder=asc";
  const [url, setUrl] = useState(
    defaultUrl + `&limit=${RATE_LIMIT}&offset=${offset}`
  );

  useEffect(() => {
    setUrl(defaultUrl + `&limit=${RATE_LIMIT}&offset=${offset}`);
  }, [offset]);

  const { data, loading, error } = useGet({ url: url });

  useEffect(() => {
    if (data && data.length < RATE_LIMIT) {
      setLimitReached(true);
    } else {
      setLimitReached(false);
    }
  }, [data]);
  return (
    <div className="user-list-container full-width large-component-width align-center">
      {data && (
        <ul className="user-list flex-r wrap full-width gap-lg justify-evenly">
          <SetApiOffset
            limit={RATE_LIMIT}
            offset={offset}
            handleOffset={setOffset}
            limitReached={limitReached}
          />
          {data.map((user) => {
            return <UserListItem user={user} />;
          })}
          <SetApiOffset
            limit={RATE_LIMIT}
            offset={offset}
            handleOffset={setOffset}
            limitReached={limitReached}
          />
          {limitReached && (
            <div>Looks like we've reached the end of the list</div>
          )}
        </ul>
      )}
    </div>
  );
}

export default UserList;

function UserListItem({ user }) {
  const [auth] = useContext(AuthContext);
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
      {user.name === auth.name ? (
        <span className="brand-text">This is you!</span>
      ) : (
        <Follow user={user} />
      )}
    </li>
  );
}
