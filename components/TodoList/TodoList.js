import Todo from './Todo';
import { todolist } from './TodoList.module.scss'

export default function TodoList (props) {
  let todoActions = props.todos || [];

  return (
    <div className={todolist}>
      {todoActions.map(action => {
        return <Todo key={action.id} action={action}></Todo>
      })}
    </div>
  )
}