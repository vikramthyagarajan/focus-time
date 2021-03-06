import { gql } from 'apollo-boost';

export const GET_TODOS = gql`
  {
    todos {
      id
      name
      isChecked
      date
    }
  }
`

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

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: String!) {
    deleteTodo(id: $id) {
      id
    }
  }
`