import { Meta, StoryObj } from '@storybook/react'
import { Bold, Italic } from 'lucide-react'
import { Toggle } from '../toggle'

const meta = {
    title: 'Shadcn/toggle',
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'outline'],
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg'],
        },
    },
    parameters: {
        layout: 'centered',
    },
    component: (args) => (
        <>
            <Toggle {...args}>
                <Bold className="h-4 w-4" />
            </Toggle>
        </>
    ),
} satisfies Meta<typeof Toggle>

type Story = StoryObj<typeof meta>

//colors
export const ToggleDefaultStyle: Story = {
    args: { variant: 'default' },
}

export const ToggleOutlineStyle: Story = {
    args: { variant: 'outline' },
}

//sizes
export const ToggleSizeDefault: Story = {
    args: { variant: 'default', size: 'default' },
}

export const ToggleSizeSmall: Story = {
    args: { variant: 'default', size: 'sm' },
}

export const ToggleSizeLarge: Story = {
    args: { variant: 'default', size: 'lg' },
}

//disabled
export const ToggleDisabled: Story = {
    args: { variant: 'default', size: 'default', disabled: true },
}
export const ToggleWithText = (args: Story) => (
    <Toggle aria-label="Toggle italic" {...args}>
        <Italic className="mr-2 h-4 w-4" />
        Italic
    </Toggle>
)

export default meta
