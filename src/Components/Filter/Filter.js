import PropTypes from "prop-types";

export default function Filter({ handelChange }) {
  return (
    <>
      <label className="label">
        Find contacts by name
        <input
          className="input"
          onChange={handelChange}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
    </>
  );
}
Filter.propTypes = {
  handelChange: PropTypes.func.isRequired,
};
