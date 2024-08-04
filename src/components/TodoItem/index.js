import './index.css'

const TodoItem = props => {
  const {todoTask, deleteTodo} = props
  const {id, title} = todoTask
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="list">
      <p className="title">{title}</p>
      <button className="delete-btn" onClick={onDelete} type="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
