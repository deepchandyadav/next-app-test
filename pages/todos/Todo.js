export default function Todo({ title, onDelete }) {
  return <div className="todo">
    <p>{title}</p>
    <button onClick={onDelete}>- Delete</button>
  </div>
}
