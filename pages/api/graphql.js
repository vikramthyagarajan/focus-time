import Cors from 'micro-cors';
import { ApolloServer } from 'apollo-server-micro';
import { typeDefs, resolvers } from '../../server/graphql'

let server = new ApolloServer({typeDefs, resolvers, context: () => {return {}}, playground: true});

let handler = server.createHandler({path: '/api/graphql'});

export const config = {
  api: {
    bodyParser: false
  }
}

const cors = Cors({
  allowMethods: ['POST', 'GET']
})

export default cors(handler)
