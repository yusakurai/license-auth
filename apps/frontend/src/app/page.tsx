import { gql } from '@apollo/client'
import { css } from '@license-auth/styled-system/css'
import { flex } from '@license-auth/styled-system/patterns'
import { Button } from '@repo/ui'

import { Counter } from '@/components'
import { getClient } from '@/lib/apollo/client'

const query = gql`
  query {
    pokemon(name: "Raichu") {
      name
    }
  }
`

export default async function Page(): Promise<JSX.Element> {
  const { data } = await getClient().query<{ pokemon: { name: string } }>({
    query,
  })

  return (
    <main>
      <h1 className={css({ color: 'primary' })}>H1 Hello Primary🐼!</h1>
      <h2 className={css({ color: 'secondary' })}>H2 Hello Secondary🐼!</h2>
      <div className={flex({ background: 'primary' })}>Primary Background</div>
      <div className={flex({ background: 'secondary' })}>Secondary Background</div>
      <div className={css({ fontWeight: 'bold' })}>fontWeight: 'bold'</div>
      <div className={css({ fontSize: '2xl' })}>fontSize: '2xl'</div>
      <div className={css({ fontSize: '3xl' })}>fontSize: '3xl'</div>
      <div className={flex({ gap: 8, align: 'center' })}>
        <Button>Button</Button>
        <Button colors="primary">Button Primary</Button>
        <Button colors="secondary">Button Secondary</Button>
        <Button size="sm">Button SM</Button>
        <Button size="md">Button MD</Button>
        <Button size="lg">Button LG</Button>
        <Button variant="solid">Button Solid</Button>
        <Button variant="outline">Button Outline</Button>
        <Button variant="ghost">Button Ghost</Button>
      </div>
      <Counter />
      <div>{data.pokemon.name}</div>
    </main>
  )
}
