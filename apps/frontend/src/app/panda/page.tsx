'use client'
import { css } from '@license-auth/styled-system/css'
import { center } from '@license-auth/styled-system/patterns'
import { flex } from '@license-auth/styled-system/patterns'
import { Button } from '@repo/ui'
import { useRouter } from 'next/navigation'

export default function Page(): React.ReactElement {
  const router = useRouter()
  return (
    <div className={center({ h: 'full' })}>
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          fontWeight: 'semibold',
          color: 'yellow.300',
          textAlign: 'center',
          textStyle: 'body',
        })}
      >
        <span>🐼</span>
        <span>Hello from Panda</span>
      </div>
      <div className={flex({ gap: 8 })}>
        <Button onClick={() => router.push('/about')}>to about</Button>
        <Button>
          <a href="/about">to about href</a>
        </Button>
      </div>
    </div>
  )
}
