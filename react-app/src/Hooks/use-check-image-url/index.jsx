import React, { useEffect, useState } from "react";
import createAxios from "../../Functions/create-axios";

function useCheckImageUrl(url) {
  const [valid, setValid] = useState(false);

  useEffect(() => {
    async function checkUrl() {
      const client = createAxios();
      if (url) {
        try {
          const response = await client.get(url);
          if (response.status === 200) {
            setValid(true);
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
    checkUrl();
  }, [url]);
  return valid;
}

export default useCheckImageUrl;
