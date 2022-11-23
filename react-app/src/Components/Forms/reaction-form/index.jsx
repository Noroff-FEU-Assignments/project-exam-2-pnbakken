import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { ALL_POSTS_URL } from "../../../Constants";
import AuthContext from "../../../Context/auth-context";
import RefreshContext from "../../../Context/refresh-context";
import createAxios from "../../../Functions/create-axios";
import BootstrapForm from "../bootstrap-form";

function ReactionForm({ postID }) {
  const url = `${ALL_POSTS_URL}/${postID}/react`;
  const [auth, setAuth] = useContext(AuthContext);
  const [disabled, setDisabled] = useState(false);
  const client = createAxios(auth);
  const [refresh, setRefresh] = useContext(RefreshContext);
  async function sendReaction(e) {
    e.preventDefault();
    setDisabled(true);
    const symbol = e.target.dataset.symbol;
    try {
      const response = await client.put(url + `/${symbol}`);
      console.log(response);
      setRefresh(!refresh);
    } catch (error) {
      console.error(error);
    } finally {
      setDisabled(false);
    }
  }

  return (
    <BootstrapForm>
      <fieldset disabled={disabled}>
        <div className="symbols flex-row wrap gap-sm align-center">
          {reactionsCollection.map((reaction) => {
            return (
              <button
                type="button"
                className="discrete"
                value={reaction.name}
                data-symbol={reaction.symbol}
                onClick={sendReaction}
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
    code: "U+261D",
    symbol: "☝",
    name: "point up",
  },
  {
    code: "U+1F60A",
    symbol: "😊",
    name: "smiling face",
  },

  {
    code: "U+1F60D",
    symbol: "😍",
    name: "heart eyes",
  },
  {
    code: "U+1F602",
    symbol: "😂",
    name: "cry laughing",
  },
  {
    code: "U+1F973",
    symbol: "🥳",
    name: "partying face",
  },
  {
    code: "U+1F638",
    symbol: "😸",
    name: "grinning cat",
  },
  {
    code: "U+2764",
    symbol: "❤️",
    name: "heart",
  },
  {
    code: "U+1F4AF",
    symbol: "💯",
    name: "one hundred",
  },
  {
    code: "U+1F90C",
    symbol: "🤌",
    name: "pinched fingers",
  },
  {
    code: "U+1F634",
    symbol: "😴",
    name: "sleeping face",
  },

  {
    code: "U+1F621",
    symbol: "😡",
    name: "angry face",
  },
  {
    code: "U+1F631",
    symbol: "😱",
    name: "scream in fear",
  },

  {
    code: "U+1F44E",
    symbol: "👎",
    name: "thumbs down",
  },

  {
    code: "U+1F441",
    symbol: "👁️",
    name: "eye",
  },
];
