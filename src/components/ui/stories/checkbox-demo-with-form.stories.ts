import { Meta, StoryObj } from '@storybook/react'
import { CheckboxReactHookFormSingle } from '../demo/checkbox-demo-with-form'

const meta = {
    title: 'Shadcn/form',
    component: CheckboxReactHookFormSingle,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof CheckboxReactHookFormSingle>

export default meta

type Story = StoryObj<typeof meta>

export const CheckboxDemoWithReactHookForm: Story = {
    args: {},
}
