import { Meta, StoryObj } from '@storybook/react'
import { DataTableDemo } from '../demo/data-table-demo'

//meta
const meta = {
    title: 'Shadcn/data-table',
    component: DataTableDemo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof DataTableDemo>

export default meta

type Story = StoryObj<typeof meta>

export const DataTable: Story = {
    args: {},
}
