import type { Meta, StoryObj } from '@storybook/react'

import { IconButton } from './IconButton'

const meta = {
  title: 'Components/buttons/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  args: {
    iconName: 'User',
  },
  argTypes: {
    iconName: {
      control: {
        type: 'select',
      },
    },
    size: {
      control: {
        type: 'select',
      },
    },
    color: {
      control: {
        type: 'select',
      },
    },
    onClick: {
      action: 'clicked',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof IconButton>

export const Base: Story = {
  render: (args) => <IconButton {...args} />,
}

export const Sizes: Story = {
  render: () => {
    return (
      <div>
        <IconButton iconName="User" size="xs" />
        <IconButton iconName="User" size="sm" />
        <IconButton iconName="User" size="md" />
        <IconButton iconName="User" size="lg" />
        <IconButton iconName="User" size="xl" />
        <IconButton iconName="User" size="2xl" />
        <IconButton iconName="User" size="3xl" />
      </div>
    )
  },
}

export const Colors: Story = {
  render: () => {
    return (
      <div>
        <IconButton color="primary" iconName="User" />
        <IconButton color="secondary" iconName="User" />
      </div>
    )
  },
}

export const Hover: Story = {
  render: () => {
    return (
      <div>
        <IconButton hover={false} iconName="User" />
        <IconButton hover iconName="User" />
      </div>
    )
  },
}
