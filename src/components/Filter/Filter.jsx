export const Filter = ({ onChange, filter }) => {
  const handleChange = evt => {
    onChange(evt.target.value);
  };
  return (
    <div>
      <p>Find contact by name</p>
      <input type="text" value={filter} onChange={handleChange} />
    </div>
  );
};
