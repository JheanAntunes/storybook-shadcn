import { Meta, StoryObj } from '@storybook/react'
import { DatePickerWithPresets } from '../demo/date-picker-with-presets-demo'

const meta = {
    title: 'Shadcn/date',
    component: DatePickerWithPresets,
    parameters: {},
} satisfies Meta<typeof DatePickerWithPresets>

export default meta

type Story = StoryObj<typeof meta>

export const DatePickerWithSelect: Story = {
    args: {},
}
