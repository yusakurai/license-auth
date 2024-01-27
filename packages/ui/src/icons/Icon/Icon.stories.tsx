import { css } from '@license-auth/styled-system/css'
import { flex } from '@license-auth/styled-system/patterns'
import * as icons from '@repo/icon'
import type { Meta, StoryObj } from '@storybook/react'

import { Icon } from './Icon'

const meta = {
  title: 'Example/Icon',
  component: Icon,
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
    color: {
      control: {
        type: 'select',
      },
    },
    size: {
      control: {
        type: 'select',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>

export default meta
type Story = StoryObj<typeof Icon>

export const Base: Story = {
  render: (args) => <Icon {...args} />,
}

export const Colors: Story = {
  render: () => {
    return (
      <div className={flex({ gap: 2, alignItems: 'end' })}>
        <Icon color="primary" iconName="User" />
        <Icon color="secondary" iconName="User" />
      </div>
    )
  },
}

export const Sizes: Story = {
  render: () => {
    return (
      <div className={flex({ gap: 2, alignItems: 'end' })}>
        <Icon iconName="User" size="xs" />
        <Icon iconName="User" size="sm" />
        <Icon iconName="User" size="md" />
        <Icon iconName="User" size="lg" />
        <Icon iconName="User" size="xl" />
        <Icon iconName="User" size="2xl" />
        <Icon iconName="User" size="3xl" />
      </div>
    )
  },
}

export const Icons: Story = {
  render: () => {
    return (
      <div className={flex({ gap: 6 })}>
        {Object.keys(icons).map((iconName) => {
          const name = iconName as keyof typeof icons

          return (
            <div
              className={flex({ gap: 1, alignItems: 'center', flexDirection: 'column' })}
              key={iconName}
            >
              <Icon iconName={name} size="sm" />
              <span className={css({ fontSize: '12px' })}>{iconName}</span>
            </div>
          )
        })}
      </div>
    )
  },
}
