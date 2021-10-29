const Filter = ({ filter, onChange }) => {
  return (
    <label className="label">
      Find contacts by name
      <input
        className="input"
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
        placeholder="Enter search name"
      />
    </label>
  );
};

export default Filter;
