import { Meta, StoryObj } from '@storybook/react'
import { ComboboxDropdownMenu } from '../demo/combobox-dropdown-menu-demo'

const meta = {
    title: 'Shadcn/combobox',
    component: ComboboxDropdownMenu,
} satisfies Meta<typeof ComboboxDropdownMenu>

export default meta

type Story = StoryObj<typeof meta>

export const ComboboxDropdownMenuDemo: Story = {
    args: {},
}
