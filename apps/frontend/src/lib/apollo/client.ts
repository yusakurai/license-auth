import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc'
import { getAccessToken } from '@auth0/nextjs-auth0'

import getEnvVar from '@/lib/env-var'

import type { IncomingHttpHeaders } from 'node:http'

interface HttpHeaders {
  headers?: IncomingHttpHeaders
}

const authLink = setContext(async (_, { headers }: HttpHeaders): Promise<HttpHeaders> => {
  const { accessToken } = await getAccessToken()

  return {
    headers: {
      ...headers,
      authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
  }
})

export const { getClient } = registerApolloClient(() => {
  const envVar = getEnvVar()

  const httpLink = createHttpLink({
    uri: envVar.graphqlEndpoint,
  })

  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  })
})
