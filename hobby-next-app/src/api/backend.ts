import { GraphQLClient } from 'graphql-request'

export const endpoint =
  process.env.NODE_ENV === 'production'
    ? 'http://backend:4000/graphql'
    : 'http://localhost:4000/graphql'

export const client = new GraphQLClient(endpoint, { headers: {} })

console.log(`Created endppint at ${endpoint}`)