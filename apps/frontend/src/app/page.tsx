import { css } from '@license-auth/styled-system/css'
import { flex } from '@license-auth/styled-system/patterns'

export default function Page(): JSX.Element {
  return (
    <main>
      <h1 className={css({ color: 'green' })}>Hello World</h1>
      <div className={flex({ align: 'center', background: 'blue' })}>USER</div>
      <div className={css({ fontSize: '2xl', fontWeight: 'bold' })}>Hello 🐼!</div>
    </main>
  )
}
