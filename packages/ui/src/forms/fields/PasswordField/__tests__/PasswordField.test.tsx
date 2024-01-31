import { fireEvent, render } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { PasswordField } from '../PasswordField'

describe('PasswordField', () => {
  describe('Rendering', () => {
    test('レンダリングされるか', () => {
      const { container } = render(<PasswordField />)

      expect(container.querySelector('input')).toBeDefined()
    })
  })

  describe('Events', () => {
    test('アイコンをクリックするとinputのtypeが切り替わるか', () => {
      const { container, getByRole } = render(<PasswordField />)
      const input = container.querySelector('input')

      expect(input?.getAttribute('type')).toBe('password')

      fireEvent.click(getByRole('button'))

      expect(input?.getAttribute('type')).toBe('text')
    })
  })
})
