import Todo from './Todo';
import { todolist } from './TodoList.module.scss'

const todoActions = [{name: 'Get up', isChecked: true}, {name: 'Bathe', isChecked: true}, {name: 'Party', isChecked: false}]

export default function TodoList () {
  return (
    <div className={todolist}>
      {todoActions.map(action => {
        return <Todo key={action.name} action={action}></Todo>
      })}
    </div>
  )
}