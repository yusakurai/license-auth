import { AuthRepository } from '../../../repository/index.js'
import { builder } from '../builder.js'
import { AuthResponse } from '../object/auth-response.js'

builder.queryField('signIn', (t) =>
  t.field({
    type: AuthResponse,
    args: {
      email: t.arg({ type: 'EmailAddress', required: true }),
      password: t.arg.string({ required: true }),
    },
    resolve: async (_, args) => {
      const result = await AuthRepository.signIn({
        email: args.email,
        password: args.password,
      })

      if (result.isErr()) {
        throw result.error
      }

      return {
        accessToken: result.value,
      }
    },
  })
)
