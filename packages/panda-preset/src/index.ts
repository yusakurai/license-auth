import { definePreset } from '@pandacss/dev'
import { tokens } from './tokens'
import { semanticTokens } from './semantic-tokens'
import { textStyles } from './text-styles'

export const corePreset = definePreset({
  theme: {
    extend: {
      tokens,
      semanticTokens,
      textStyles,
    },
  },
})
