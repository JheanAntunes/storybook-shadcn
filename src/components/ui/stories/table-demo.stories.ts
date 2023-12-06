import { Meta, StoryObj } from '@storybook/react'
import { TableDemo } from '../demo/table-demo'

const meta = {
    title: 'Shadcn/table',
    component: TableDemo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof TableDemo>

export default meta

type Story = StoryObj<typeof meta>

//render componente
export const Table: Story = {
    args: {},
}
