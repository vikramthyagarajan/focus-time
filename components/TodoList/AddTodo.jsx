import { addTodoRow, textArea, addButton } from './TodoList.module.scss';
import { useState } from 'react';

export default function AddTodo(props) {
  let [name, setName] = useState('');

  return (
    <div className={addTodoRow}>
      <div className={textArea}>
        <input type="text" name="todo" id="new-todo" placeholder="New Task..." 
          value={name} onChange={({target}) => setName(target.value || '')}></input>
      </div>
      <div className={addButton} onClick={() => {props.addTodo(name, new Date()); setName('')}}>
        Add Todo
      </div>
    </div>
  )
}