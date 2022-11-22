import React, { useEffect, useState } from "react";
import createAxios from "../../Functions/create-axios";

function useCheckImageUrl(url) {
  const [valid, setValid] = useState(true);

  useEffect(() => {
    async function checkUrl() {
      const client = createAxios();
      if (url) {
        try {
          const response = await fetch(url);
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
