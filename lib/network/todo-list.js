import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_TODOS, ADD_TODO, CHECK_TODO, DELETE_TODO } from './api-definitions'

export const getTodosApi = () =>  useQuery(GET_TODOS) 

export const addTodoApi = () => useMutation(ADD_TODO, {
  update(cache, {data: { addTodo }}) {
    const { todos } = cache.readQuery({ query: GET_TODOS });
    cache.writeQuery({
      query: GET_TODOS,
      data: { todos: todos.concat([addTodo]) },
    });
  }
})

export const checkTodoApi = () => useMutation(CHECK_TODO)

export const deleteTodoApi = () => useMutation(DELETE_TODO, {
  update(cache, {data: {deleteTodo: {id}}}) {
    const { todos } = cache.readQuery({ query: GET_TODOS })
    let deletedIndex = todos.findIndex(el => el.id === id)
    let newTodos = todos.slice(0, deletedIndex).concat(todos.slice(deletedIndex + 1, todos.length))
    cache.writeQuery({
      query: GET_TODOS,
      data: { todos: newTodos}
    })
  }
})