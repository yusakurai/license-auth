import { builder } from '../builder.js'

export const AuthResponse = builder.simpleObject('AuthResponse', {
  fields: (t) => ({
    accessToken: t.field({ type: 'JWT', description: 'アクセストークン' }),
  }),
})
