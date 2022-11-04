import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/auth-context";
import createAxios from "../../Functions/create-axios";
import PropTypes from "prop-types";

function useGet(settings) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [auth, setAuth] = useContext(AuthContext);
  const client = createAxios(auth);
  useEffect(() => {
    async function getData() {
      if (auth) {
        try {
          setLoading(true);
          const response = await client.get(settings.url);
          console.log(response);
          if (response.status === 200) {
            console.log("Status 200");
            setData(response.data);
          }
        } catch (error) {
        } finally {
          setLoading(false);
        }
      }
    }
    getData();
  }, [auth]);
  return { data, loading, error };
}

export default useGet;

useGet.propTypes = {
  settings: PropTypes.object.isRequired,
};
