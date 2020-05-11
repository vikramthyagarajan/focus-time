import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks'

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