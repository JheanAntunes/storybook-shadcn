import { Meta, StoryObj } from '@storybook/react'
import { CheckboxReactHookFormMultiple } from '../demo/checkbox-ReactHook-Form-Multiple'

const meta = {
    title: 'Shadcn/form',
    component: CheckboxReactHookFormMultiple,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof CheckboxReactHookFormMultiple>

export default meta

type Story = StoryObj<typeof meta>

export const CheckboxDemoReactHookFormMultiple: Story = {
    args: {},
}
