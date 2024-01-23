/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'staging' | 'production'
    readonly PORT: number
    readonly GRAPHQL_PATH: string
    readonly FIREBASE_CREDENTIAL_FILE_NAME: string
    readonly DATABASE_URL: string
  }
}
