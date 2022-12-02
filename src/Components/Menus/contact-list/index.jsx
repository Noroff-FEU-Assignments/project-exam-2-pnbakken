import React from "react";
import PropTypes from "prop-types";

import "./index.style.scss";
import ProfileImage from "../../User/profile-image";
import { Link } from "react-router-dom";
import Follow from "../../Buttons/follow-user";

function ContactList({ contacts, handleShow }) {
  console.log(contacts);

  function RenderContacts({ contacts }) {
    if (contacts) {
      return (
        <ul className="contacts no-list-style flex-c align-center full-width gap-md">
          <button className="discrete" onClick={handleShow}>
            Close
          </button>
          {contacts.map((contact) => {
            return <Contact contact={contact} action={handleShow} />;
          })}
          <button className="discrete" onClick={handleShow}>
            Close
          </button>
        </ul>
      );
    }
  }

  return (
    <div
      className="contact-list flex-c p-3 full-width smaller-component-width"
      onMouseLeave={handleShow}
    >
      <RenderContacts contacts={contacts} />
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
  handleShow: PropTypes.func.isRequired,
};

export default ContactList;

function Contact({ contact, action }) {
  return (
    <li className="flex-row contact full-width">
      <Link
        to={`/user/${contact.name}`}
        className="flex-r wrap align-center light-text gap-md"
        onClick={action}
      >
        <ProfileImage src={contact.avatar} />
        <span className="user-name">{contact.name}</span>
      </Link>
    </li>
  );
}
