import { Meta, StoryObj } from '@storybook/react'
import { DropdownMenuDemo } from '../demo/dropdown-menu-demo'

const meta = {
    title: 'Shadcn/dropdown-menu',
    component: DropdownMenuDemo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof DropdownMenuDemo>

export default meta

type Story = StoryObj<typeof meta>

export const DropDownMenu: Story = {
    args: {},
}
