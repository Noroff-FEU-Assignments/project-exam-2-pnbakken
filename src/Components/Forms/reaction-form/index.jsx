import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { POSTS_URL } from "../../../Constants";
import AuthContext from "../../../Context/auth-context";
import RefreshContext from "../../../Context/refresh-context";
import createAxios from "../../../Functions/create-axios";
import BootstrapForm from "../bootstrap-form";

import "./index.style.scss";

function ReactionForm({ postID }) {
  const url = `${POSTS_URL}/${postID}/react`;
  //eslint-disable-next-line
  const [auth, setAuth] = useContext(AuthContext);
  const [disabled, setDisabled] = useState(false);
  const client = createAxios(auth);
  const [refresh, setRefresh] = useContext(RefreshContext);
  async function sendReaction(e) {
    e.preventDefault();
    setDisabled(true);
    const symbol = e.target.dataset.symbol;
    try {
      await client.put(url + `/${symbol}`);
      setRefresh(!refresh);
    } catch (error) {
      console.error(error);
    } finally {
      setDisabled(false);
    }
  }

  return (
    <BootstrapForm>
      <fieldset disabled={disabled} className="reaction-form p-3 radius-sm">
        <div className="symbols flex-r wrap gap-md justify-evenly align-center">
          {reactionsCollection.map((reaction) => {
            return (
              <button
                type="button"
                className="discrete"
                value={reaction.name}
                data-symbol={reaction.symbol}
                onClick={sendReaction}
                key={reaction.name}
              >
                {reaction.symbol}
              </button>
            );
          })}
        </div>
      </fieldset>
    </BootstrapForm>
  );
}

export default ReactionForm;

const reactionsCollection = [
  {
    code: "U+1F44D",
    symbol: "👍",
    name: "thumbs up",
  },
  {
    code: "U+1F60A",
    symbol: "😊",
    name: "smiling face",
  },
  {
    code: "U+1F602",
    symbol: "😂",
    name: "cry laughing",
  },
  {
    code: "U+2764",
    symbol: "❤️",
    name: "heart",
  },

  {
    code: "U+1F621",
    symbol: "😡",
    name: "angry face",
  },

  {
    code: "U+1F44E",
    symbol: "👎",
    name: "thumbs down",
  },
];
