import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/auth-context";
import createAxios from "../../Functions/create-axios";
import PropTypes from "prop-types";
import RefreshContext from "../../Context/refresh-context";

function useGet(settings) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [auth, setAuth] = useContext(AuthContext);
  const [refresh, setRefresh] = useContext(RefreshContext);
  const client = createAxios(auth);
  console.log(settings.url);
  useEffect(() => {
    async function getData() {
      if (auth) {
        try {
          setLoading(true);
          const response = await client.get(settings.url);
          console.log(response);
          if (response.status === 200) {
            setData(response.data);
          }
        } catch (error) {
          //setError(error.response.errors);
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
