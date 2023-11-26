import { Meta, StoryObj } from '@storybook/react'
import { ComboboxForm } from '../demo/combobox-with-form-demon'

//documentar meu componente, armazenar, posição do elemento, tipo controls
const meta = {
    title: 'Shadcn/form',
    component: ComboboxForm,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ComboboxForm>
export default meta

type Story = StoryObj<typeof meta>

export const ComboboxFormDemo: Story = {
    args: {},
}
