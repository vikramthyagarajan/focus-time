import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks'

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

export const addTodoApi = (name, date) => useMutation(gql`
  mutation AddTodo($name: String!, $date: String) {
    addTodo(name: $name, date: $date) {
      id
      name
      date
      isChecked
    }
  }
`)