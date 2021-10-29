import PropTypes from 'prop-types'

export default function ContactListItem(props) {
  const { name, number, id, onDeleteContacts } = props;
  return (
    <>
      <span>{name}: </span>
      <span>{number} </span>
      <button
        className="button__delete"
        type="button"
        onClick={() => onDeleteContacts(id)}
      >
        delete
      </button>
    </>
  );
}

ContactListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDeleteContacts: PropTypes.func.isRequired,
}