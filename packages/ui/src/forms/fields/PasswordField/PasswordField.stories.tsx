import type { Meta, StoryObj } from '@storybook/react'

import { PasswordField } from './PasswordField'

const meta = {
  title: 'Components/forms/fields/PasswordField',
  component: PasswordField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PasswordField>

export default meta
type Story = StoryObj<typeof PasswordField>

export const Base: Story = {
  render: (args) => <PasswordField {...args} />,
}
