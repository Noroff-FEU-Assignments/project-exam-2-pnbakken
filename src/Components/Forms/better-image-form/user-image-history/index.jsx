import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { USER_URL } from "../../../../Constants";
import AuthContext from "../../../../Context/auth-context";
import HistoryContext from "../../../../Context/history-context";
import validImageUrl from "../../../../Functions/valid-image-url";
import useGet from "../../../../Hooks/use-get";
import PropTypes from "prop-types";

import "./index.style.scss";
import Message from "../../../Message/message";

function UserImageHistory({ handler, endAction }) {
  // This function needs rewriting
  //eslint-disable-next-line
  const [auth, setAuth] = useContext(AuthContext);
  //eslint-disable-next-line
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
    //eslint-disable-next-line
  }, [data]);

  function setImageFromHistory(e) {
    handler(e.target.dataset.src);
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
      {loading && <>Loading</>}
      {error && <Message type="error">Something went wrong</Message>}
    </div>
  );
}

UserImageHistory.propTypes = {
  handler: PropTypes.func.isRequired,
  endAction: PropTypes.func.isRequired,
};

export default UserImageHistory;
