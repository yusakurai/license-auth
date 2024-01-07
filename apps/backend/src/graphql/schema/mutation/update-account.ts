import { AuthRepository } from '../../../repository/index.js'
import { builder } from '../builder.js'
import { EmailAndPasswordInput } from '../input/email-and-password-input.js'

const UpdateAccountResponse = builder.simpleObject('UpdateAccountResponse', {
  fields: (t) => ({
    uid: t.string({ description: 'ユーザーID' }),
    email: t.field({ type: 'EmailAddress', description: 'メールアドレス' }),
  }),
})

builder.mutationField('updateAccount', (t) =>
  t.field({
    description: '認証アカウントを更新する',
    type: UpdateAccountResponse,
    args: {
      uid: t.arg({ type: 'String', required: true, description: 'ユーザーID' }),
      input: t.arg({ type: EmailAndPasswordInput, required: true }),
    },
    resolve: async (_, { uid, input }) => {
      const result = await AuthRepository.updateAccount({
        uid,
        email: input.email,
        password: input.password,
      })

      return result.match(
        (updatedAccountResult) => updatedAccountResult,
        (error) => {
          throw error
        }
      )
    },
  })
)
