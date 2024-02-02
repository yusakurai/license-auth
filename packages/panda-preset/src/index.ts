import { definePreset } from '@pandacss/dev'
import { tokens } from './tokens'
import { semanticTokens } from './semantic-tokens'

export const corePreset = definePreset({
  theme: {
    extend: {
      tokens,
      semanticTokens,
    },
  },
})
