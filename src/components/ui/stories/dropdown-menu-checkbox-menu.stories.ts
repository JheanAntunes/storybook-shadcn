import { Meta, StoryObj } from '@storybook/react'
import { DropdownMenuCheckboxesDemo } from '../demo/dropdown-menu-checkbox-demo'

//meta
const meta = {
    title: 'Shadcn/dropdown-menu',
    component: DropdownMenuCheckboxesDemo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof DropdownMenuCheckboxesDemo>

export default meta

type Story = StoryObj<typeof meta>

export const DropdownMenuCheckboxes: Story = {
    args: {},
}
