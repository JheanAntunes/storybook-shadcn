import { Meta, StoryObj } from '@storybook/react'
import AuthenticationPage from '../authentication-page'

const meta = {
    title: 'Examples/authentication',
    component: AuthenticationPage,
} satisfies Meta<{}>
export default meta

type Story = StoryObj<typeof meta>

export const Authentication: Story = {}
