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

interface ApolloWrapperProps {
  children: React.ReactNode
  accessToken?: string
}

export function ApolloWrapper({ children, accessToken }: ApolloWrapperProps): React.ReactElement {
  const makeClient = (): NextSSRApolloClient<NormalizedCacheObject> => {
    const envVar = getEnvVar()

    const httpLink = new HttpLink({
      uri: envVar.graphqlEndpoint,
      headers: {
        authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
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
  return <ApolloNextAppProvider makeClient={makeClient}>{children}</ApolloNextAppProvider>
}
