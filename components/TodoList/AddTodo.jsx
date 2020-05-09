import { addTodo, textArea, addButton } from './TodoList.module.scss';

export default function AddTodo() {
  return (
    <div className={addTodo}>
      <div className={textArea}>
        <input type="text" name="todo" id="new-todo" placeholder="New Task..."/>
      </div>
      <div className={addButton}>Add Todo</div>
    </div>
  )
}