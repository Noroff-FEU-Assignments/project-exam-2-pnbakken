import React from "react";
import PropTypes from "prop-types";

function DisplayReaction({ reactionData }) {
  console.log(reactionData);

  return (
    <>
      {reactionData && (
        <div className="reaction-display flex-row wrap full-width p-2 gap-xs">
          {reactionData.map((reaction) => {
            return <Reaction data={reaction} />;
          })}
        </div>
      )}
    </>
  );
}

DisplayReaction.propTypes = {
  reactionData: PropTypes.object.isRequired,
};

export default DisplayReaction;

function Reaction({ data }) {
  return (
    <div className="reaction flex-col align-center">
      <span className="symbol">{data.symbol}</span>
      <span className="count">{data.count}</span>
    </div>
  );
}
