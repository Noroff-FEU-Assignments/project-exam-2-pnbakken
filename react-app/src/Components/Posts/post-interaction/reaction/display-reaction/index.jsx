import React from "react";
import PropTypes from "prop-types";

function DisplayReaction({ reactionData }) {
  console.log(reactionData);

  return (
    <div className="reaction-display flex-row wrap full-width">
      {reactionData &&
        reactionData.map((reaction) => {
          return <Reaction data={reaction} />;
        })}
    </div>
  );
}

export default DisplayReaction;

DisplayReaction.propTypes = {
  reactionData: PropTypes.object.isRequired,
};

function Reaction({ data }) {
  return (
    <div className="reaction flex-column align-center">
      <span className="symbol">{data.symbol}</span>
      <span className="count">{data.count}</span>
    </div>
  );
}
