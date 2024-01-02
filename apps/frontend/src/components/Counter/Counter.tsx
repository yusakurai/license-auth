'use client'

import { useState } from 'react'

export default function Counter(): JSX.Element {
  const [count, setCount] = useState(0)

  const handleClick = (): void => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick} type="button">
        Click
      </button>
    </div>
  )
}
