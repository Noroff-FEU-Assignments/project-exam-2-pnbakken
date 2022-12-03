import PropTypes from "prop-types";

function setPageTitle(title = "") {
  const target = document.querySelector("title");
  target.innerText = title + "Just Post";
}

setPageTitle.propTypes = {
  title: PropTypes.string,
};

export default setPageTitle;
