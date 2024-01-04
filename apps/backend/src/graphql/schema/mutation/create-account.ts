import { AuthRepository } from '../../../repository/index.js'
import { builder } from '../builder.js'
import { EmailAndPasswordInput } from '../input/email-and-password-input.js'

const CreateAccountResponse = builder.simpleObject('CreateAccountResponse', {
  fields: (t) => ({
    accessToken: t.field({ type: 'JWT', description: 'アクセストークン' }),
  }),
})

builder.mutationField('createAccount', (t) =>
  t.field({
    type: CreateAccountResponse,
    args: {
      input: t.arg({ type: EmailAndPasswordInput, required: true }),
    },
    resolve: async (_, { input }) => {
      const result = await AuthRepository.createUser({
        email: input.email,
        password: input.password,
      })

      return result.match(
        (accessToken) => ({ accessToken }),
        (error) => {
          throw error
        }
      )
    },
  })
)
