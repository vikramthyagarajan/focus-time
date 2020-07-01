import Cors from 'micro-cors';
import { ApolloServer } from 'apollo-server-micro';
import { typeDefs, resolvers } from '../../server/graphql'
import { PrismaClient } from '@prisma/client'

let database
// Prisma gives a too many connections issue, I'm guessing this files runs mulitple times by Next
// So creating a singleton in Dev
if (process.env.NODE_ENV === 'production') {
  database = new PrismaClient()
}
else {
  if (!global.prisma) {
    global.prisma = new PrismaClient()
  }
  database = global.prisma
}

let context = {
  prisma: database
}

let server = new ApolloServer({typeDefs, resolvers, context: () => {return context}, playground: true})

let handler = server.createHandler({path: '/api/graphql'})

export const config = {
  api: {
    bodyParser: false
  }
}

const cors = Cors({
  allowMethods: ['POST', 'GET']
})

export default cors(handler)
