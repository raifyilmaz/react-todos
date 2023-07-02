import TodoItem from './TodoItem'

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className='todosList'>
        {todos.length === 0 && 'No to-do'}
        {todos.map(todo =>{
        return(
            <TodoItem 
                {...todo} 
                key={todo.id}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
            />
        )
        })}
    </ul>
  )
}
