import { Meta, StoryObj } from '@storybook/react'
import { CardWithForm } from '../demo/card-with-form'

const meta = {
    title: 'Shadcn/form',
    component: CardWithForm,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof CardWithForm>

type Story = StoryObj<typeof meta>

export const CardWithFormDemo: Story = {
    args: {},
}
export default meta
