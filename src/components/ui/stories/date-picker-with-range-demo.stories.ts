import { Meta, StoryObj } from '@storybook/react'
import { DatePickerWithRange } from '../demo/date-picker-with-ranger-demo'

//meta
const meta = {
    title: 'Shadcn/date',
    component: DatePickerWithRange,
    parameters: {},
} satisfies Meta<typeof DatePickerWithRange>

export default meta

type Story = StoryObj<typeof meta>

export const DatePickerWithRangeDemo: Story = {
    args: {},
}
