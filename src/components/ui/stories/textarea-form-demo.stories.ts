import { Meta, StoryObj } from '@storybook/react'
import { TextareaFormDemo } from '../demo/textarea-form-demo'

const meta = {
    title: 'Shadcn/form',
    component: TextareaFormDemo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof TextareaFormDemo>

export default meta

type Story = StoryObj<typeof meta>

//render componente
export const Textarea: Story = {
    args: {},
}
