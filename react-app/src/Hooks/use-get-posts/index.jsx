import { useContext, useEffect, useState } from "react";
import { ALL_POSTS_URL } from "../../Constants";
import AuthContext from "../../Context/auth-context";
import createAxios from "../../Functions/create-axios";

function useGetPosts() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [auth, setAuth] = useContext(AuthContext);
  const client = createAxios(auth);
  useEffect(() => {
    async function getPosts() {
      try {
        setLoading(true);
        const response = await client.get(ALL_POSTS_URL + "?_author=true");
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
    getPosts();
  }, []);
  return { posts, loading, error };
}

export default useGetPosts;
