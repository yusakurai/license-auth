import { AuthRepository } from '../../../repository/index.js'
import { builder } from '../builder.js'
import { EmailAndPasswordInput } from '../input/email-and-password-input.js'

const CreateAccountResponse = builder.simpleObject('CreateAccountResponse', {
  fields: (t) => ({
    uid: t.string({ description: 'ユーザーID' }),
    email: t.field({ type: 'EmailAddress', description: 'メールアドレス' }),
  }),
})

builder.mutationField('createAccount', (t) =>
  t.field({
    description: '認証アカウントを作成する',
    type: CreateAccountResponse,
    args: {
      input: t.arg({ type: EmailAndPasswordInput, required: true }),
    },
    resolve: async (_, { input }) => {
      const result = await AuthRepository.createAccount({
        email: input.email,
        password: input.password,
      })

      return result.match(
        (createAccountResult) => createAccountResult,
        (error) => {
          throw error
        }
      )
    },
  })
)
