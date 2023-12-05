import { Meta, StoryObj } from '@storybook/react'
import { CommandDialogDemo } from '../demo/command-dialog-demo'

const meta = {
    title: 'Shadcn/command',
    component: CommandDialogDemo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof CommandDialogDemo>

export default meta

type Story = StoryObj<typeof meta>

export const CommandWithCmdkDialog: Story = {
    args: {},
}
