import React from "react";
import PropTypes from "prop-types";

import "./index.style.scss";

function ContactList({ contacts, handleShow }) {
  return <div className="contact-list">ContactList</div>;
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  handleShow: PropTypes.func.isRequired,
};

export default ContactList;
