import { Meta, StoryObj } from '@storybook/react'
import { ComboboxPopover } from '../demo/combobox-popover-demon'

//documentar meu componente, armazenar, posição do elemento, tipo controls
const meta = {
    title: 'Shadcn/combobox',
    component: ComboboxPopover,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ComboboxPopover>
export default meta

type Story = StoryObj<typeof meta>

export const ComboboxPopoverDemo: Story = {
    args: {},
}
