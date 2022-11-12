import React from "react";
import InteractionPanel from "../../post-interaction/interaction-panel";

function DetailInteraction({ data }) {
  return (
    <div>
      <InteractionPanel data={data} />
    </div>
  );
}

export default DetailInteraction;
