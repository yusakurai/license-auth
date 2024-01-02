// import { render, fireEvent, screen } from '@testing-library/react'
import { render, fireEvent } from '@testing-library/react'
import { expect, test, describe } from 'vitest'

import Counter from '../Counter'

describe('Counter', () => {
  describe('画面の初期表示確認', () => {
    test('クリック数が初期表示として「0」が表示されていること', () => {
      const { getByText } = render(<Counter />)

      // コンポーネントのHTMLを確認できる
      // screen.debug()

      expect(getByText('You clicked 0 times')).toBeDefined()
    })
  })

  test('ボタンをクリックした場合、クリック数が画面に表示されていること', () => {
    const { getByText } = render(<Counter />)
    fireEvent.click(getByText('Click'))

    expect(getByText('You clicked 1 times')).toBeDefined()
  })
})
