import React from "react";

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

export default SetApiOffset;
