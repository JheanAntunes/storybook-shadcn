import { Meta, StoryObj } from '@storybook/react'
import { ProfileForm } from '../profile.form'

const meta = {
    title: 'Example/form',
    component: ProfileForm,
} satisfies Meta<{}>

export default meta

type Story = StoryObj<typeof meta>

export const ProfileFormDemo: Story = {}
