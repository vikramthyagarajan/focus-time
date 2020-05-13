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

  type Mutation {
    addTodo(name: String!, date: String): Todo!
  }
`

const todos = [{id: 1, name: 'Get up', isChecked: true}, {id: 2, name: 'Bathe', isChecked: true}, {id: 3, name: 'Party', isChecked: false}]

export const resolvers = {
  Query: {
    todos: (_parent, _args, _context) => {
      return todos
    }
  },
  Mutation: {
    addTodo: (_parent, {name, date}, _context) => {
      let id = todos.length + 1;
      let todo = {id, name, date: date || Date.now(), isChecked: false}
      todos.push(todo)
      return todo
    }
  }
}
