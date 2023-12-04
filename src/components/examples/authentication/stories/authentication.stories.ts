import { Meta, StoryObj } from '@storybook/react'
import { UserAuthForm } from '../components/user-auth-form'

const meta = {
    title: 'Examples/authentication',
    component: UserAuthForm,
} satisfies Meta<{}>
export default meta

type Story = StoryObj<typeof meta>

export const Authentication: Story = {}
