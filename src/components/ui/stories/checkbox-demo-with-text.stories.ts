import { Meta, StoryObj } from '@storybook/react'
import { CheckboxWithText } from '../demo/checkbox-demo-with-text'

const meta = {
    title: 'Shadcn/checkbox',
    component: CheckboxWithText,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof CheckboxWithText>

export default meta

type Story = StoryObj<typeof meta>

export const CheckboxDemoWithText: Story = {
    args: {},
}
