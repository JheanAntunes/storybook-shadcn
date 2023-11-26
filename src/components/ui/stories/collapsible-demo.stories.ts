import { Meta, StoryObj } from '@storybook/react'
import { CollapsibleDemo } from '../demo/collapsible-demo'

//meta
const meta = {
    title: 'Shadcn/collapsible',
    component: CollapsibleDemo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof CollapsibleDemo>

export default meta

type Story = StoryObj<typeof meta>

export const Collapsible: Story = {
    args: {},
}
