import { definePreset } from '@pandacss/dev'
import type { Preset } from '@pandacss/types'

export const corePreset = definePreset({
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          primary: {
            DEFAULT: { value: '#000000' },
          },
          secondary: {
            DEFAULT: { value: '#999999' },
          },
        },
      },
    },
  },
}) as Preset
