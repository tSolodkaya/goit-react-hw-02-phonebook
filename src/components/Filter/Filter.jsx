const Filter = ({ nameForFind, onFilter }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={nameForFind}
        onChange={onFilter}
      />
    </label>
  );
};

export default Filter;
