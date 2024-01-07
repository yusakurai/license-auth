'use client'

import { ApolloLink, HttpLink } from '@apollo/client'
import {
  ApolloNextAppProvider,
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr'

import getEnvVar from '@/lib/env-var'

import type { NormalizedCacheObject } from '@apollo/client'

function makeClient(): NextSSRApolloClient<NormalizedCacheObject> {
  const envVar = getEnvVar()
  const httpLink = new HttpLink({
    uri: envVar.graphqlEndpoint,
  })

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === 'undefined'
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  })
}

export function ApolloWrapper({ children }: React.PropsWithChildren): JSX.Element {
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
}
