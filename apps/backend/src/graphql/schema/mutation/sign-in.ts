import { AuthRepository } from '../../../repository/index.js'
import { builder } from '../builder.js'
import { EmailAndPasswordInput } from '../input/email-and-password-input.js'

export const SignInResponse = builder.simpleObject('SignInResponse', {
  fields: (t) => ({
    accessToken: t.field({ type: 'JWT', description: 'アクセストークン' }),
  }),
})

builder.mutationField('signIn', (t) =>
  t.field({
    type: SignInResponse,
    args: {
      input: t.arg({ type: EmailAndPasswordInput, required: true }),
    },
    resolve: async (_, { input }) => {
      const result = await AuthRepository.signIn({
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
