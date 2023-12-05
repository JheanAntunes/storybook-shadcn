import { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'
import { Textarea, TextareaProps } from '../textarea'
import { Label } from '../label'

const meta = {
    title: 'Shadcn/textarea',
    component: (props) => (
        <Textarea {...props} placeholder="Type your message here." />
    ),
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<TextareaProps>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
}

export const Disabled: Story = {
    args: {
        disabled: true,
        'aria-disabled': true,
    },
}

export const TextareaWithLabel: Story = {
    args: {
        children: 'Shadcn',
    },
    render: (props) => (
        <div className="grid w-full gap-1.5">
            <Label htmlFor="message">{props.children}</Label>
            <Textarea placeholder="Type your message here." id="message" />
        </div>
    ),
}
export const TextareaWithText: Story = {
    args: {},
    render: (props) => (
        <div className="grid w-full gap-1.5">
            <Label htmlFor="message-2">Your Message</Label>
            <Textarea placeholder="Type your message here." id="message-2" />
            <p className="text-sm text-muted-foreground">
                Your message will be copied to the support team.
            </p>
        </div>
    ),
}

export const TextareaWithButton: Story = {
    args: {},
    render: (args) => (
        <div className="grid w-full gap-2">
            <Textarea placeholder="Type your message here." />
            <Button>Send message</Button>
        </div>
    ),
}
