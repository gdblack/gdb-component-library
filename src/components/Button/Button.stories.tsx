import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

type BgPreset = 'default' | 'emerald' | 'rose' | 'slate'
type StoryArgs = React.ComponentProps<typeof Button> & {
  bg?: BgPreset
}
const bgPresetClasses: Record<BgPreset, string> = {
  default: '',
  emerald: 'bg-emerald-100 dark:bg-emerald-900 text-white',
  rose: 'bg-rose-100 dark:bg-rose-900 text-white',
  slate: 'bg-slate-100 dark:bg-slate-900 text-white',
}

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
    radius: {
      control: 'select',
      options: ['none', 'sm', 'md', 'lg', 'full'],
    },
    className: {
      control: 'text',
      description: 'Tailwind overrides',
    },
    // story-only arg
    bg: {
      control: { type: 'select' },
      options: ['default', 'emerald', 'rose', 'slate'],
    },
  } as Meta<typeof Button>['argTypes'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<StoryArgs>

export const Playground: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    radius: 'md',
    children: 'Button',
    bg: 'default' as BgPreset,
    className: 'bg-emerald-600',
  },
  render: ({ bg = 'default', className, ...args }) => (
    <Button
      {...args}
      className={[bgPresetClasses[bg as BgPreset], className]
        .filter(Boolean)
        .join(' ')}
    />
  ),
}
