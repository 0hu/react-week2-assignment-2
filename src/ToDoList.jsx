export default function ToDoList({ toDos, removeHandler }) {
  if (toDos.length === 0) {
    return <p>할 일이 없어요!</p>;
  }
  return (
    <ol>
      {toDos.map(({ id, text }) => (
        <li key={id}>
          {text}
          <button
            onClick={() => removeHandler(id)}
            type="button"
            style={{ margin: '0 0 0 5px' }}
          >
            완료
          </button>
        </li>
      ))}
    </ol>
  );
}
