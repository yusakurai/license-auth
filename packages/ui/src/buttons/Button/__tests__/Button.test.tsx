import { render, fireEvent } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'

import { Button } from '../Button'

describe('Button', () => {
  describe('Rendering', () => {
    test('レンダリングされるか', () => {
      const { getByText } = render(<Button>Button</Button>)

      expect(getByText('Button')).toBeDefined()
    })
  })

  describe('Props', () => {
    test('asChildがtrueの場合、button要素がレンダリングされないか', () => {
      const { container } = render(
        <Button asChild>
          <a href="https://example.com/">example.com</a>
        </Button>
      )

      expect(container.querySelector('button')).toBeNull()
    })
  })

  describe('Events', () => {
    test('クリックされるか', () => {
      const handleClick = vi.fn()
      const { getByText } = render(<Button onClick={handleClick}>Button</Button>)

      fireEvent.click(getByText('Button'))

      expect(handleClick).toHaveBeenCalled()
    })
  })
})
