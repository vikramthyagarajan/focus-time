import Todo from './Todo';
import { todolist } from './TodoList.module.scss'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost';

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
  // let todoActions = props.todos || [];
  const { loading, error, data} = useQuery(getListApi)

  if (loading) return <div>Loading</div>
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