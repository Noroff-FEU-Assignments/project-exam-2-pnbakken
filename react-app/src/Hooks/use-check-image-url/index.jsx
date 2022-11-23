import React, { useEffect, useState } from "react";
import createAxios from "../../Functions/create-axios";

function useCheckImageUrl(url) {
  const [valid, setValid] = useState(true);

  const img = () => {
    return <img src={url} />;
  };
  useEffect(() => {
    async function checkUrl() {
      const client = createAxios();
      if (url) {
        try {
          const response = await client.get(url);
        } catch (error) {
          console.error(error);
          setValid(false);
        }
      }
    }
    checkUrl();
  }, [url]);
  return valid;
}

export default useCheckImageUrl;
