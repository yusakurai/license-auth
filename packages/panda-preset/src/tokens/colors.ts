import { defineTokens } from '@pandacss/dev'
import * as radixColors from '@radix-ui/colors'

const getKeys = <T extends { [key: string]: unknown }>(obj: T): (keyof T)[] => {
  return Object.keys(obj)
}

export const defineColorPalettes = () => {
  const colors = getKeys(radixColors).reduce(
    (acc, key) => {
      const target = key.includes('Dark') ? 'dark' : 'light'
      const tokens = getKeys(radixColors[key]).map((color) => {
        return [color, { value: radixColors[key][color] }]
      })

      acc[target] = { ...acc[target], ...Object.fromEntries(tokens) }
      return acc
    },
    {
      light: {},
      dark: {},
    }
  )

  return defineTokens.colors(colors)
}
