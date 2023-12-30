import { builder } from './schema/builder.js'
import { GraphQLSchema } from 'graphql'

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      args: {
        name: t.arg.string(),
      },
      resolve: (parent, { name }) => `hello, ${name || 'World'}`,
    }),
  }),
})

export const schema: GraphQLSchema = builder.toSchema()
