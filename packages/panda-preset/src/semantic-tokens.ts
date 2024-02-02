import { defineSemanticTokens } from '@pandacss/dev'

export const semanticTokens = defineSemanticTokens({
  colors: {
    primary: {
      DEFAULT: { value: '{colors.light.gray12}' },
    },
    secondary: {
      DEFAULT: { value: '{colors.light.gray9}' },
    },
  },
})
