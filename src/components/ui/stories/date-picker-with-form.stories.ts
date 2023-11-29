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
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement)

        const labelInput = canvas.getByText('Date of birth')
        await expect(labelInput).toBeVisible()

        const buttonOpenPopover = canvas.getByRole('button', {
            name: 'Escolha uma data',
        })

        const buttonSubmit = canvas.getByRole('button', {
            name: 'Submit',
        })

        await step('validated date-picker', async () => {
            await userEvent.click(buttonSubmit)

            const errorMessage = canvas.getByText(
                'A date of birth is required.',
            )
            await expect(errorMessage).toBeVisible()
        })

        await step(
            'Click Simulation button to open the popover and render input data',
            async () => {
                await userEvent.click(buttonOpenPopover)

                const dateInput = canvas.getByLabelText('dob')
                await expect(dateInput).toBeVisible()
            },
        )

        await step('Day 1 Click Simulation', async () => {
            const buttonDayOne = canvas.getByRole('button', {
                name: '1',
            })

            await userEvent.click(buttonDayOne)
        })
    },
}
