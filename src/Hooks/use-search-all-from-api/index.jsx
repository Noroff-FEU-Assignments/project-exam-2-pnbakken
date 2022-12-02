import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import useGet from "../use-get";
import AuthContext from "../../Context/auth-context";
import createAxios from "../../Functions/create-axios";
import { POSTS_URL, USER_URL } from "../../Constants";

function useSearchAllFromApi(query) {
  const [gatheredData, setGatheredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [auth, setAuth] = useContext(AuthContext);
  const client = createAxios(auth);

  const RATE_LIMIT = 50;
  const [offset, setOffset] = useState(0);
  const upOffset = () => setOffset(offset + RATE_LIMIT);

  const [postUrlSettings, setPostUrlSettings] = useState({
    url: `${POSTS_URL}?limit=${RATE_LIMIT}&offset=${offset}`,
  });
  const [userUrlSettings, setUserUrlSettings] = useState({
    url: `${USER_URL}?limit=${RATE_LIMIT}&offset=${offset}`,
  });

  useEffect(() => {
    async function searchUsers(query, url) {
      let searchResults = gatheredData;
      try {
        const users = await client.get(url);
        console.log(users);
        if (users.status === 200) {
          users.data.forEach(
            (user) => user.name.inludes(query) && searchResults.push(user)
          );
        }
        setGatheredData(searchResults);
        upOffset();
        try {
          searchUsers(query, url);
        } catch (error) {
          console.error(error);
        }
      } catch (error) {
        console.error(error);
      }
    }
    searchUsers();
  }, [query]);

  return gatheredData;
}

export default useSearchAllFromApi;
