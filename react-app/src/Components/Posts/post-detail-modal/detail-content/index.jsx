import React from "react";
import PropTypes from "prop-types";
import PostContent from "../../post/post-content";
import PostFooter from "../../post/post-footer";

function DetailContent({ data, isOwner }) {
  return (
    <div className="post post-detail">
      <PostContent data={data} />
      <PostFooter data={data} isOwner={isOwner} detail={true} />
    </div>
  );
}

export default DetailContent;

DetailContent.propTypes = {
  data: PropTypes.object.isRequired,
};
