import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks'
import { ADD_TODO, CHECK_TODO, DELETE_TODO } from './api-definitions'

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

export const deleteTodoApi = () => useMutation(DELETE_TODO, {
  update(cache, {data: {deleteTodo: {id}}}) {
    const { todos } = cache.readQuery({ query: getListQuery })
    let deletedIndex = todos.findIndex(el => el.id === id)
    let newTodos = todos.slice(0, deletedIndex).concat(todos.slice(deletedIndex + 1, todos.length))
    cache.writeQuery({
      query: getListQuery,
      data: { todos: newTodos}
    })
  }
})