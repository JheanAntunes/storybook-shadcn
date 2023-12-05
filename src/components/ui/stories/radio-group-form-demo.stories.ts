import { Meta, StoryObj } from '@storybook/react'
import { RadioGroupFormDemo } from '../demo/radio-group-form-demo'

const meta = {
    title: 'Shadcn/form',
    component: RadioGroupFormDemo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof RadioGroupFormDemo>

export default meta

type Story = StoryObj<typeof meta>

//render componente
export const RadioGroupForm: Story = {
    args: {},
}
