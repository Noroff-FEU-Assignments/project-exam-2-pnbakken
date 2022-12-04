import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/auth-context";
import createAxios from "../../Functions/create-axios";
import PropTypes from "prop-types";
import RefreshContext from "../../Context/refresh-context";

function useGet(settings) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  //eslint-disable-next-line
  const [auth, setAuth] = useContext(AuthContext);
  //eslint-disable-next-line
  const [refresh, setRefresh] = useContext(RefreshContext);

  useEffect(() => {
    async function getData() {
      const client = createAxios(auth);
      if (auth) {
        try {
          setLoading(true);
          const response = await client.get(settings.url);
          if (response.status === 200) {
            setData(response.data);
            setError(null);
          }
        } catch (error) {
          setError(error);
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    }
    getData();
  }, [refresh, auth, settings.url]);
  return { data, loading, error };
}

useGet.propTypes = {
  settings: PropTypes.object.isRequired,
};

export default useGet;
