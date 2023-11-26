import { Meta, StoryObj } from '@storybook/react'
import { NavigationMenuDemo } from '../demo/navigation-menu-demo'

const meta = {
    title: 'Shadcn/navigation-menu',
    component: NavigationMenuDemo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof NavigationMenuDemo>

export default meta

type Story = StoryObj<typeof meta>

//render componente
export const NavigationMenu: Story = {
    args: {},
}
