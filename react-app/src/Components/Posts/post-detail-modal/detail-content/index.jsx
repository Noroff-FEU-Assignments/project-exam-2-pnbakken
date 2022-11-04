import React from "react";
import PropTypes from "prop-types";
import PostContent from "../../post/post-content";
import PostFooter from "../../post/post-footer";
import Post from "../../post";

function DetailContent({ data }) {
  return <PostContent data={data} />;
}

export default DetailContent;

DetailContent.propTypes = {
  data: PropTypes.object.isRequired,
};
