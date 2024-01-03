import type { ApolloFastifyContextFunction } from '@as-integrations/fastify'

export interface Context {
  userId: string
}

export const createContext: ApolloFastifyContextFunction<Context> = async () => {
  return {
    userId: 'hoge',
  }
}
