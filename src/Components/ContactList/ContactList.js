import ContactListItem from "./ContactListItem";
import PropTypes from "prop-types";
import "./ContactList.scss";

export default function ContactList(props) {
  const { onDeleteContact, visibleContacts } = props;
  return (
    <ul className="Contact__list">
      {visibleContacts &&
        visibleContacts.map(({ id, name, number }) => {
          return (
            <li key={id} className="Contact__item">
              <ContactListItem
                name={name}
                number={number}
                id={id}
                onDeleteContact={onDeleteContact}
              />
            </li>
          );
        })}
    </ul>
  );
}

ContactList.propTypes = {
  visibleContacts: PropTypes.array.isRequired,
};
