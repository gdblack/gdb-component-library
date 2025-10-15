import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    children: 'Button',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    children: 'Button',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'medium',
    children: 'Button',
  },
}

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 'small',
    children: 'Small Button',
  },
}

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'large',
    children: 'Large Button',
  },
}
