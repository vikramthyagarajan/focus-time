import { useState } from 'react'
import { addTodoRow, textArea, addButton } from './TodoList.module.scss'
import { getTodosApi } from '../../lib/network/todo-list'

export default function AddTodo(props) {
  let [name, setName] = useState('');
  let { loading, error } = getTodosApi();

  if (loading || error)
    return <></>

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