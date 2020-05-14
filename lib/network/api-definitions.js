import { gql } from 'apollo-boost';

export const CHECK_TODO = gql`
  mutation CheckTodo($id: String!, $isChecked: Boolean!) {
    checkTodo(id: $id, isChecked: $isChecked) {
      id
      isChecked
    }
  }
`