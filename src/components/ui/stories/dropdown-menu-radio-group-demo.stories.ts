import { Meta, StoryObj } from '@storybook/react'

import { DropdownMenuRadioGroupDemo } from '../demo/dropdown-menu-radio-group-demo'

//meta
const meta = {
    title: 'Shadcn/dropdown-menu',
    component: DropdownMenuRadioGroupDemo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof DropdownMenuRadioGroupDemo>

export default meta

type Story = StoryObj<typeof meta>

export const DropdownMenuRadioGroup: Story = {
    args: {},
}
