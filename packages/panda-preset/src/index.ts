import { definePreset } from '@pandacss/dev'
import type { Preset } from '@pandacss/types'

export const corePreset = definePreset({
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          primary: {
            DEFAULT: { value: '#008b8b' },
          },
          secondary: {
            DEFAULT: { value: '#f08080' },
          },
        },
      },
    },
  },
}) as Preset
