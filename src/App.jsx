import './App.css'
import { useEffect, useState } from 'react'
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';

export default function App() {
  
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if(localValue == null) return [];

    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));
  },[todos]);

  function addTodo(title){
    setTodos(currentTodos => {
      return[
        ...currentTodos, 
        {id: crypto.randomUUID(), title, completed: false }
      ]
    })
  }

  function toggleTodo(id, completed){
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id){
          return{
            ...todo, completed
          }
        }
        return todo; 
      })
    })
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      <div className="todosFrame">
        <h1 className='yourTodos'>Your TODOS</h1>
        <NewTodoForm onSubmit={addTodo} />
        <h2>Todo List</h2>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo }/>
      </div>
    </>
  )
}
