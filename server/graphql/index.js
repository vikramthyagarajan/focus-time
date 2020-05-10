import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Todo {
    name: String
    date: String
    isChecked: Boolean
  }

  type Query {
    todos: [Todo]
  }
`

const todos = [{name: 'Get up', isChecked: true}, {name: 'Bathe', isChecked: true}, {name: 'Party', isChecked: false}]

export const resolvers = {
  Query: {
    todos: (_parent, _args, _context) => {
      return todos
    }
  }
}
