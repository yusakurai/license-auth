'use client'
import { css } from '@license-auth/styled-system/css'
import { flex } from '@license-auth/styled-system/patterns'
import { Button } from '@repo/ui'
import { useRouter } from 'next/navigation'

export default function Page(): React.ReactElement {
  const router = useRouter()
  return (
    <div>
      <div
        className={css({
          fontWeight: 'bold',
          color: 'red',
        })}
      >
        <span>about</span>
      </div>

      <div className={flex({ gap: 8 })}>
        <Button onClick={() => router.push('/panda')}>to panda</Button>
        <Button>
          <a href="/panda">to panda href</a>
        </Button>
      </div>
    </div>
  )
}
