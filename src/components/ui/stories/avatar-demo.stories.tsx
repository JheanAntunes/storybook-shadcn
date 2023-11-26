import { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarFallback, AvatarImage } from '../avatar'

//meta
const meta = {
  title: 'Shadcn/avatar',
  component: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback></AvatarFallback>
    </Avatar>
  ),
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<{}>

export default meta

type Story = StoryObj<typeof meta>

export const AvatarWithImage: Story = {
  args: {},
}
export const AvatarWithFallback: Story = {
  args: {},
  render: () => (
    <Avatar>
      <AvatarImage src="" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
}
