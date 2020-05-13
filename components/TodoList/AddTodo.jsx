import { useState, useCallback } from 'react'
import { addTodoRow, textArea, addButton } from './TodoList.module.scss'
import { getTodosApi, addTodoApi } from '../../lib/network/todo-list'

export default function AddTodo(props) {
  let [name, setName] = useState('');
  let { loading, error } = getTodosApi();
  let [ addTodoHandler ] = addTodoApi()

  const onTodoClick = useCallback(() => {
    addTodoHandler({variables: {name, date: new Date().toString()}})
    setName('')
  })

  if (loading || error)
    return <></>

  return (
    <div className={addTodoRow}>
      <div className={textArea}>
        <input type="text" name="todo" id="new-todo" placeholder="New Task..." 
          value={name} onChange={({target}) => setName(target.value || '')}></input>
      </div>
      <div className={addButton} onClick={onTodoClick}>
        Add Todo
      </div>
    </div>
  )
}