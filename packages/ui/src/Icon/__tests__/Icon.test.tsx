import { render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { Icon } from '../Icon'

describe('Icon', () => {
  describe('Rendering', () => {
    test('レンダリングされるか', () => {
      const { container } = render(<Icon name="User" />)

      expect(container.querySelector('svg')).toBeDefined()
    })
  })
})
