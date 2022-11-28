import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { USER_URL } from "../../../../Constants";
import AuthContext from "../../../../Context/auth-context";
import HistoryContext from "../../../../Context/history-context";
import validImageUrl from "../../../../Functions/valid-image-url";
import useGet from "../../../../Hooks/use-get";

import "./index.style.scss";

function UserImageHistory({ handler, endAction }) {
  const [auth, setAuth] = useContext(AuthContext);
  const [history, setHistory] = useContext(HistoryContext);
  const getUserHistorySettings = {
    url: USER_URL + `/${auth.name}/posts`,
  };
  const [images, setImages] = useState([]);
  const { data, loading, error } = useGet(getUserHistorySettings);

  useEffect(() => {
    async function getImages() {
      let imageHistory = [];
      if (history && history.media) {
        history.media.forEach(async (media) => {
          const valid = await validImageUrl(media);
          if (!valid) {
          } else if (imageHistory) {
            const has = imageHistory.includes(media) ? true : false;
            if (!has) {
              imageHistory.push(media);
            }
          } else imageHistory.push(media);
        });
      }
      if (data) {
        data.forEach((post) => {
          if (post.media) {
            if (imageHistory) {
              const has = imageHistory.includes(post.media) ? true : false;
              if (!has) {
                imageHistory.push(post.media);
              }
            } else {
              imageHistory.push(post.media);
            }
          }
        });
      }
      setImages(imageHistory);
    }
    getImages();
  }, [data]);

  function setImageFromHistory(e) {
    handler(e.target.dataset.src.toString());
    endAction();
  }

  return (
    <div className="image-history full-width">
      Media History
      {images && (
        <div className="flex-r wrap gap-sm">
          {images.map((img) => {
            return (
              <button type="button" key={img} onClick={setImageFromHistory}>
                <div
                  className="image"
                  style={{ backgroundImage: `url(${img})` }}
                  data-src={img}
                ></div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default UserImageHistory;
