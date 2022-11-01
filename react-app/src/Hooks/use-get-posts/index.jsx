import { useContext, useEffect, useState } from "react";
import { ALL_POSTS_URL } from "../../Constants";
import AuthContext from "../../Context/auth-context";
import createAxios from "../../Functions/create-axios";

function useGetPosts(settings) {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [auth, setAuth] = useContext(AuthContext);
  const client = createAxios(auth);
  useEffect(() => {
    async function getPosts() {
      if (auth) {
        try {
          setLoading(true);
          const response = await client.get(settings.url);
          console.log(response);
          if (response.status === 200) {
            console.log("Status 200");
            setPosts(response.data);
          }
        } catch (error) {
        } finally {
          setLoading(false);
        }
      }
    }
    getPosts();
  }, [auth]);
  return { posts, loading, error };
}

export default useGetPosts;
