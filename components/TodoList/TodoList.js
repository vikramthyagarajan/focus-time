import Todo from './Todo';
import { todolist } from './TodoList.module.scss'
import getTodoState from './TodoState';

export default function TodoList () {
  let {todos: todoActions, addTodo, deleteTodo} = getTodoState()

  return (
    <div className={todolist}>
      {todoActions.map(action => {
        return <Todo key={action.name} action={action}></Todo>
      })}
    </div>
  )
}