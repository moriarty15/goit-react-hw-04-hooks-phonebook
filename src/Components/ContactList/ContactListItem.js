import PropTypes from "prop-types";

export default function ContactListItem(props) {
  const { name, number, id, onDeleteContact } = props;
  return (
    <p>
      {name}: <span>{number}</span>
      <button
        className="button__delete"
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        delete
      </button>
    </p>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
