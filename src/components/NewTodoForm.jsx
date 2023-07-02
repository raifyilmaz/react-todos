import { useState } from 'react'

export default function NewTodoForm({ onSubmit }) {
  const [newItem, setNewItem] = useState('');
    
  function handleSubmit(e) {
    e.preventDefault();
    if(newItem === "")return
    
    onSubmit(newItem)

    setNewItem('');
  }

  return (
    <form onSubmit={handleSubmit} className='newItemForm'>
        <label htmlFor="item">New Item</label>
        <input value={newItem} placeholder='enter your todo here ' onChange={e => setNewItem(e.target.value)} type="text" id="item" required />
        <button>Create</button>
    </form>
  )
}
