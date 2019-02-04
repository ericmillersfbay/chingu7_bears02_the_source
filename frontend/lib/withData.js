import withApollo from 'next-with-apollo'
import ApolloClient from 'apollo-boost'

const uri = process.env.NODE_ENV === 'production' ? 'https://the-source-backend.herokuapp.com/graphql' : 'http://localhost:7272/graphql'

function createClient({ headers }) {
  return new ApolloClient({
    uri,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include'
        },
        headers
      })
    }
  })
}

export default withApollo(createClient)
