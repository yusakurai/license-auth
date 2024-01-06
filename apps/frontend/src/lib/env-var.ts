import { assertIsNonNullable } from '@/utils/type-check'

interface EnvVar {
  graphqlEndpoint: string
}

export default function getEnvVar(): EnvVar {
  assertIsNonNullable(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT)

  return {
    graphqlEndpoint: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  }
}
