import { gql } from 'apollo-boost';

export const ADD_TODO = gql`
  mutation AddTodo($name: String!, $date: String) {
    addTodo(name: $name, date: $date) {
      id
      name
      date
      isChecked
    }
  }
`

export const CHECK_TODO = gql`
  mutation CheckTodo($id: String!, $isChecked: Boolean!) {
    checkTodo(id: $id, isChecked: $isChecked) {
      id
      isChecked
    }
  }
`