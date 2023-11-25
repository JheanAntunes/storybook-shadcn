import { Meta, StoryObj } from '@storybook/react'
import { RadioGroupFormDemo } from '../demo/radio-group-form-demo'

//meta === docs do componente, os types de controls, posição do elemento, valores inicias, armazenar o componente
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
