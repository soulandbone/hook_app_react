

export const TodoItem = ({todo, onDeleteTodo, onToggleTodo}) => {
  return (
    <li  className="list-group-item d-flex justify-content-between" >
    <span 
    className={`align-self-center ${(todo.done) ? 
 
      "badge bg-primary text-wrap width: 6rem"
      
       : '' }`}
    onClick={() => onToggleTodo(todo.id)}
    >
      {todo.description}
    </span>
    <button className="btn btn-danger"
    onClick={ () => onDeleteTodo(todo.id)}
    
    >Borrar</button>
    
</li>
  )
}
