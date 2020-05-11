import ApolloClient from 'apollo-boost'
import withApollo from 'next-with-apollo'

export function setupApolloClient(App) {
  return withApollo(() => {
    return new ApolloClient({
      uri: 'http://localhost:3000/api/graphql'
    })
  })(App)
}
