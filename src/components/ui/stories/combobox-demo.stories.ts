import { Meta, StoryObj } from '@storybook/react'
import { ComboboxDemo } from '../demo/combobox-demo'

const meta = {
    title: 'Shadcn/combobox',
    component: ComboboxDemo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ComboboxDemo>
export default meta

type Story = StoryObj<typeof meta>

export const Combobox: Story = {
    args: {},
}
