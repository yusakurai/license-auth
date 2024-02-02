import { defineTokens } from '@pandacss/dev'
import { defineColorPalettes } from './colors'

export const tokens = defineTokens({
  colors: defineColorPalettes(),
})
