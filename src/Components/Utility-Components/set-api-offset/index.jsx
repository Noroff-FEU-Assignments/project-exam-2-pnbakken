import React from "react";
import PropTypes from "prop-types";

function SetApiOffset({ limit, offset, handleOffset, limitReached }) {
  const upOffset = () => handleOffset(offset + limit);
  const lowerOffset = () => handleOffset(offset - limit);
  return (
    <div className="flex-r full-width justify-between">
      {offset > 0 ? (
        <button onClick={lowerOffset}>Previous</button>
      ) : (
        <div></div>
      )}
      {!limitReached ? <button onClick={upOffset}>Next</button> : <div></div>}
    </div>
  );
}

SetApiOffset.propTypes = {
  limit: PropTypes.number.isRequired,
  offSet: PropTypes.number.isRequired,
  handleOffset: PropTypes.func.isRequired,
  limitReached: PropTypes.bool.isRequired,
};

export default SetApiOffset;
