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

// export const getTodosApi = () =>  useQuery(getListQuery) 
export const getTodosApi = () =>  {return {loading: false, error: true}}//useQuery(getListQuery) 