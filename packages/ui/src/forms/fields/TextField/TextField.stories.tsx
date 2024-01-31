import { flex } from '@license-auth/styled-system/patterns'
import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from './TextField'

const meta = {
  title: 'Components/forms/fields/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: {
        type: 'text',
      },
    },
    iconName: {
      control: {
        type: 'select',
      },
    },
    iconPlacement: {
      control: {
        type: 'select',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof TextField>

export const Base: Story = {
  render: (args) => <TextField {...args} />,
}

export const Borderless: Story = {
  render: () => {
    return <TextField borderless placeholder="borderless" type="text" />
  },
}

export const Icon: Story = {
  render: () => {
    return <TextField iconName="Search" placeholder="search" type="text" />
  },
}

export const IconPlacement: Story = {
  render: () => {
    return (
      <div className={flex({ gap: 4, direction: 'column' })}>
        <TextField iconName="Search" placeholder="search" type="text" />
        <TextField iconName="Search" iconPlacement="right" placeholder="search" type="text" />
      </div>
    )
  },
}
