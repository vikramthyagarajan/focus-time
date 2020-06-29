import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks'
import { ADD_TODO, CHECK_TODO } from './api-definitions'

const getListQuery = gql`
  {
    todos {
      id
      name
      isChecked
    }
  }
`

export const getTodosApi = () =>  useQuery(getListQuery) 

export const addTodoApi = (name, date) => useMutation(ADD_TODO, {
  update(cache, {data: { addTodo }}) {
    const { todos } = cache.readQuery({ query: getListQuery });
    cache.writeQuery({
      query: getListQuery,
      data: { todos: todos.concat([addTodo]) },
    });
  }
})

export const checkTodoApi = () => useMutation(CHECK_TODO)