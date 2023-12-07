import { Meta, StoryObj } from '@storybook/react'
import { DatePickerForm } from '../demo/date-picker-with-form'
import { userEvent, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta = {
    title: 'Shadcn/form',
    component: DatePickerForm,
} satisfies Meta<typeof DatePickerForm>

export default meta

type Story = StoryObj<typeof meta>

export const DatePickerFormDemo: Story = {
    args: {},
}
