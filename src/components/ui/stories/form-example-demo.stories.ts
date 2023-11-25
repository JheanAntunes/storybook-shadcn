import { Meta, StoryObj } from '@storybook/react'

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
}
