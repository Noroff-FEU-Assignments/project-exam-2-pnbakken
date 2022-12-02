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
          {contacts.map((contact) => {
            return <Contact contact={contact} action={handleShow} />;
          })}
        </ul>
      );
    }
  }

  return (
    <div
      className="contact-list flex-c p-3 gap-sm full-width smaller-component-width"
      onMouseLeave={handleShow}
    >
      <button className="discrete" onClick={handleShow}>
        Close
      </button>
      <RenderContacts contacts={contacts} />
      <button className="discrete" onClick={handleShow}>
        Close
      </button>
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
    <li className="contact flex-r full-width">
      <Link
        to={`/user/${contact.name}`}
        className="flex-r wrap align-center full-width light-text gap-md"
        onClick={action}
      >
        <ProfileImage src={contact.avatar} />
        <span className="user-name">{contact.name}</span>
      </Link>
    </li>
  );
}
