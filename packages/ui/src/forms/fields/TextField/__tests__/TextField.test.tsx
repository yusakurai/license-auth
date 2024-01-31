import { fireEvent, render } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'

import { TextField } from '../TextField'

describe('TextField', () => {
  describe('Rendering', () => {
    test('レンダリングされるか', () => {
      const { getByRole } = render(<TextField />)

      expect(getByRole('textbox')).toBeDefined()
    })
  })

  describe('Props', () => {
    test('iconNameが指定された場合、Iconがレンダリングされるか', () => {
      const { container } = render(<TextField iconName="Search" />)

      expect(container.querySelector('svg')).toBeDefined()
    })

    test('iconNameとonIconClickが指定された場合、IconButtonがレンダリングされるか', () => {
      const handleClick = vi.fn()
      const { getByRole } = render(<TextField iconName="Search" onIconClick={handleClick} />)

      expect(getByRole('button')).toBeDefined()
    })
  })

  describe('Events', () => {
    test('入力されるか', () => {
      const handleChange = vi.fn()
      const { getByRole } = render(<TextField onChange={handleChange} />)

      fireEvent.input(getByRole('textbox'), { target: { value: 'test' } })

      expect(handleChange).toHaveBeenCalled()
    })

    test('iconNameとonIconClickが指定された場合、クリックされるか', () => {
      const handleClick = vi.fn()
      const { getByRole } = render(<TextField iconName="Search" onIconClick={handleClick} />)

      fireEvent.click(getByRole('button'))

      expect(handleClick).toHaveBeenCalled()
    })
  })
})
