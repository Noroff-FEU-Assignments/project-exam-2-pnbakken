import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import useGet from "../use-get";
import AuthContext from "../../Context/auth-context";
import createAxios from "../../Functions/create-axios";
import { POSTS_URL } from "../../Constants";

function useAllFromApi() {
  const RATE_LIMIT = 100;
  const [gatheredData, setGatheredData] = useState();
  const [offset, setOffset] = useState(0);
  const upOffset = () => setOffset(offset + RATE_LIMIT);
  const [urlSettings, setUrlSettings] = useState({
    url: `${POSTS_URL}/limit=${RATE_LIMIT}&offset=${offset}`,
  });
  const [auth, setAuth] = useContext(AuthContext);

  useEffect(() => {
    const client = createAxios(auth);
    async function fetchAllData() {
      try {
        const data = await client.get(urlSettings);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchAllData();
  }, []);
}

export default useAllFromApi;
