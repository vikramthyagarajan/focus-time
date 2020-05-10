import Todo from './Todo';
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost';
import { todolist } from './TodoList.module.scss'
import LoadingTodoList from '../Loading/LoadingTodoList';

const getListApi = gql`
  {
    todos {
      id
      name
      isChecked
    }
  }
`
export default function TodoList (props) {
  let { loading, error, data} = useQuery(getListApi)

  if (loading) return <LoadingTodoList />
  if (error) return <div>Error</div>
  let todoActions = data.todos || []

  return (
    <div className={todolist}>
      {todoActions.map(action => {
        return <Todo key={action.id} action={action}></Todo>
      })}
    </div>
  )
}