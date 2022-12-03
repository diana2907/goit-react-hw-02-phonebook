export const Contact = ({ id, name, number, onDelete }) => {
  console.log(id);
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </>
  );
};
