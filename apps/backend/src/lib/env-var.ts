import { assertIsNonNullable } from '../utils/type-check.js'

import ProcessEnv = NodeJS.ProcessEnv

interface EnvironmentVariable {
  readonly nodeEnv: ProcessEnv['NODE_ENV']
  readonly port: ProcessEnv['PORT']
  readonly graphqlPath: ProcessEnv['GRAPHQL_PATH']

  readonly auth0Domain: ProcessEnv['AUTH0_DOMAIN']
  readonly auth0ClientId: ProcessEnv['AUTH0_CLIENT_ID']
  readonly auth0ClientSecret: ProcessEnv['AUTH0_CLIENT_SECRET']
  readonly auth0JwksUrl: ProcessEnv['AUTH0_JWKS_URL']
  readonly auth0Audience: ProcessEnv['AUTH0_AUDIENCE']
  readonly auth0Issuer: ProcessEnv['AUTH0_ISSUER']

  readonly firebaseCredentialFileName: ProcessEnv['FIREBASE_CREDENTIAL_FILE_NAME']
}

export default function getEnvVar(): EnvironmentVariable {
  assertIsNonNullable(process.env.NODE_ENV)
  assertIsNonNullable(process.env.PORT)
  assertIsNonNullable(process.env.GRAPHQL_PATH)

  assertIsNonNullable(process.env.AUTH0_DOMAIN)
  assertIsNonNullable(process.env.AUTH0_CLIENT_ID)
  assertIsNonNullable(process.env.AUTH0_CLIENT_SECRET)
  assertIsNonNullable(process.env.AUTH0_JWKS_URL)
  assertIsNonNullable(process.env.AUTH0_AUDIENCE)
  assertIsNonNullable(process.env.AUTH0_ISSUER)

  assertIsNonNullable(process.env.FIREBASE_CREDENTIAL_FILE_NAME)

  return {
    nodeEnv: process.env.NODE_ENV,
    port: process.env.PORT,
    graphqlPath: process.env.GRAPHQL_PATH,

    auth0Domain: process.env.AUTH0_DOMAIN,
    auth0ClientId: process.env.AUTH0_CLIENT_ID,
    auth0ClientSecret: process.env.AUTH0_CLIENT_SECRET,
    auth0JwksUrl: process.env.AUTH0_JWKS_URL,
    auth0Audience: process.env.AUTH0_AUDIENCE,
    auth0Issuer: process.env.AUTH0_ISSUER,

    firebaseCredentialFileName: process.env.FIREBASE_CREDENTIAL_FILE_NAME,
  }
}
