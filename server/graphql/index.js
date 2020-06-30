import { gql } from 'apollo-server'
import { generateId } from '../util/util'

export const typeDefs = gql`
  type Todo {
    id: String
    name: String
    date: String
    isChecked: Boolean
  }

  type Query {
    todos: [Todo]
  }

  type Mutation {
    addTodo(name: String!, date: String): Todo!
    checkTodo(id: String!, isChecked: Boolean!): Todo!
    deleteTodo(id: String!): Todo!
  }
`

const todos = [{id: 1, name: 'Get up', isChecked: true}, {id: 2, name: 'Bathe', isChecked: true}, {id: 3, name: 'Party', isChecked: false}]

export const resolvers = {
  Query: {
    todos: (_parent, _args, ctx) => {
      return ctx.prisma.todos.findMany({where: {}})
    }
  },
  Mutation: {
    addTodo: async function(_parent, {name, date}, ctx) {
      let newDate = date? new Date(date): new Date()
      let id = await generateId()

      return ctx.prisma.todos.create({
        data: {
          id, name, date: newDate.toISOString(), isChecked: false
        }
      })
    },
    checkTodo: function(_parent, {id, isChecked}, ctx) {
      return ctx.prisma.todos.update({
        where: {id},
        data: {isChecked}
      })
    },
    deleteTodo: function(_parent, {id}, ctx) {
      return {id}
      // return ctx.prisma.todos.delete({
      //   where: { id }
      // })
    },
  }
}
