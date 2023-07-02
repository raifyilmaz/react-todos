import React from 'react'

export default function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
        <label className='todoList-label'>
            <input 
            className='itemCheckBox' 
            type="checkbox" 
            checked={completed} 
            onChange={e => toggleTodo(id,  e.target.checked)}
            /> 
            {title}
        </label>
        <button onClick={() => deleteTodo(id)} className='deleteBtn'>Delete</button>
    </li> 
  )
}