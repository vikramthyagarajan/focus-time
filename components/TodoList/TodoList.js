import Todo from './Todo';
import { todolist } from './TodoList.module.scss'

const todoActions = [{name: 'Get up'}, {name: 'Bathe'}, {name: 'Party'}]

export default function TodoList () {
  return (
    <div className={todolist}>
      {todoActions.map(action => {
        return <Todo key={action.name} action={action}></Todo>
      })}
    </div>
  )
}