import Todo from './Todo'
import { getTodosApi } from '../../lib/network/todo-list'
import { todolist } from './TodoList.module.scss'
import LoadingTodoList from '../Loading/LoadingTodoList'
import Error from '../Error/Error'

export default function TodoList (props) {
  let { loading, error, data} = getTodosApi()

  if (loading) return <LoadingTodoList />
  if (error) return <Error />
  let todoActions = data.todos || []

  return (
    <div className={todolist}>
      {todoActions.map(action => {
        return <Todo key={action.id} action={action}></Todo>
      })}
    </div>
  )
}