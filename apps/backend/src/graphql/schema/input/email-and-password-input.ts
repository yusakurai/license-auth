import { builder } from '../builder.js'

export const EmailAndPasswordInput = builder.inputType('EmailAndPasswordInput', {
  fields: (t) => ({
    email: t.field({ type: 'EmailAddress', required: true, description: 'メールアドレス' }),
    password: t.string({ required: true, description: 'パスワード' }),
  }),
})
