import { Meta, StoryObj } from '@storybook/react'

import { expect } from '@storybook/jest'
import { userEvent, within } from '@storybook/testing-library'
import { ProfileForm } from '../demo/Form-example-demo'
//meta
const meta = {
    title: 'Shadcn/form',
    component: ProfileForm,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ProfileForm>

export default meta

type Story = StoryObj<typeof meta>

export const ProfileFormDemo: Story = {
    args: {},
    play: async ({ args, canvasElement, step }) => {
        //methods to manipulation of story
        const canvas = within(canvasElement)

        //get elements
        const labelInput = canvas.getByLabelText(/username/i)
        const inputName = canvas.getByPlaceholderText('shadcn')
        const buttonSubmit = canvas.getByRole('button')
        expect(labelInput).toBeVisible()
        expect(inputName).toBeVisible()
        expect(buttonSubmit).toBeVisible()

        await step('Form Error', async () => {
            await userEvent.click(buttonSubmit)
            const messageError = await canvas.findByText(
                'Username must be at least 2 characters.',
            )
            expect(messageError).toBeVisible()
        })

        await step('Form Submit', async () => {
            await userEvent.type(inputName, 'shadcn')
            await userEvent.click(buttonSubmit)

            const messageError = canvas.queryByText(
                'Username must be at least 2 characters.',
            )
            expect(messageError).not.toBeInTheDocument()
        })
    },
}
