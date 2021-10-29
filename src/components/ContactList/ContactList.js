import React from "react";
import PropTypes from "prop-types";
import "./ContactList.scss";
import ContactListItem from "./ContactListItem";

const ContactList = ({ filter, onDeleteContacts }) => {
  return (
    <ul className="Contact__list">
      {filter.map(({ id, name, number }) => {
        return (
          <li key={id} className="Contact__item">
            <ContactListItem
              name={name}
              number={number}
              id={id}
              onDeleteContacts={onDeleteContacts}
            />
          </li>
        );
      })}
    </ul>
  );
};
export default ContactList;

ContactList.propTypes = {
  filter: PropTypes.array.isRequired,
  id: PropTypes.string,
}