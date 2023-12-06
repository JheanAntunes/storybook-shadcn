import { Meta, StoryObj } from '@storybook/react'
import { ProgressDemo } from '../demo/progress-demo'

const meta = {
    title: 'Shadcn/progress',
    component: ProgressDemo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ProgressDemo>

export default meta

type Story = StoryObj<typeof meta>

export const Progress: Story = {
    args: {},
}
