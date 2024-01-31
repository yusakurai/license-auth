import { flex } from '@license-auth/styled-system/patterns'
import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta = {
  title: 'Components/buttons/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Button',
  },
  argTypes: {
    variant: {
      control: {
        type: 'select',
      },
    },
    size: {
      control: {
        type: 'select',
      },
    },
    colors: {
      control: {
        type: 'select',
      },
    },
    onClick: {
      action: 'clicked',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof Button>

export const Base: Story = {
  render: (args) => <Button {...args} />,
}

export const Sizes: Story = {
  render: () => {
    return (
      <div className={flex({ gap: 4, alignItems: 'center' })}>
        <Button size="lg">ButtonLg</Button>
        <Button size="md">Button</Button>
        <Button size="sm">Button</Button>
      </div>
    )
  },
}

export const Variants: Story = {
  render: () => {
    return (
      <div className={flex({ gap: 2, alignItems: 'center' })}>
        <Button variant="solid">Button</Button>
        <Button variant="outline">Button</Button>
        <Button variant="ghost">Button</Button>
      </div>
    )
  },
}

export const Colors: Story = {
  render: () => {
    return (
      <div className={flex({ gap: 2, alignItems: 'center' })}>
        <Button colors="primary">Button</Button>
        <Button colors="secondary">Button</Button>
      </div>
    )
  },
}

export const AsChild: Story = {
  render: () => {
    return (
      <Button asChild>
        <a href="https://example.com/">Links</a>
      </Button>
    )
  },
}
