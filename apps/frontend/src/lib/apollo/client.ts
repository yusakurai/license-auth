import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'

import getEnvVar from '@/lib/env-var'

export const { getClient } = registerApolloClient(() => {
  const envVar = getEnvVar()
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: envVar.graphqlEndpoint,
    }),
  })
})
