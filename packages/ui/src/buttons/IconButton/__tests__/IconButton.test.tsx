import { fireEvent, render } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'

import { IconButton } from '../IconButton'

describe('IconButton', () => {
  describe('Rendering', () => {
    test('レンダリングされるか', () => {
      const { getByRole } = render(<IconButton iconName="User" />)

      expect(getByRole('button')).toBeDefined()
    })
  })

  describe('Events', () => {
    test('クリックされるか', () => {
      const handleClick = vi.fn()
      const { getByRole } = render(<IconButton iconName="User" onClick={handleClick} />)

      fireEvent.click(getByRole('button'))

      expect(handleClick).toHaveBeenCalled()
    })
  })
})
