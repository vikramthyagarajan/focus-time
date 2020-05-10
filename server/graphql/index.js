import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Todo {
    id: Int
    name: String
    date: String
    isChecked: Boolean
  }

  type Query {
    todos: [Todo]
  }
`

const todos = [{id: 1, name: 'Get up', isChecked: true}, {id: 2, name: 'Bathe', isChecked: true}, {id: 3, name: 'Party', isChecked: false}]

export const resolvers = {
  Query: {
    todos: (_parent, _args, _context) => {
      return todos
    }
  }
}
