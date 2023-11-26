import { Meta, StoryObj } from '@storybook/react'
import { CheckboxDisabled } from '../demo/checkbox-disabled'

const meta = {
    title: 'Shadcn/checkbox',
    component: CheckboxDisabled,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof CheckboxDisabled>

export default meta

type Story = StoryObj<typeof meta>

export const CheckboxDemoDisabled: Story = {
    args: {},
}
