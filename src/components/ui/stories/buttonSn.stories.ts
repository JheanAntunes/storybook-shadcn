import { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'

const meta = {
    title: 'Shadcn/button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: { type: 'select' },
            options: [
                'default',
                'secondary',
                'destructive',
                'ghost',
                'link',
                'outline',
            ],
        },
        size: {
            control: { type: 'select' },
            options: ['default', 'icon', 'sm', 'lg'],
        },
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

//color
export const Default: Story = {
    args: {
        variant: 'default',
        children: 'ButtonShadcn',
    },
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'ButtonShadcn',
    },
}

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        children: 'ButtonShadcn',
    },
}

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'ButtonShadcn',
    },
}

export const Link: Story = {
    args: {
        variant: 'link',
        children: 'ButtonShadcn',
    },
}
export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'ButtonShadcn',
    },
}

//size

export const SizeDefault: Story = {
    args: {
        size: 'default',
        children: 'ButtonShadcn',
    },
}
export const SizeIcon: Story = {
    args: {
        size: 'icon',
        children: 'icon',
    },
}
export const SizeLarge: Story = {
    args: {
        size: 'lg',
        children: 'ButtonShadcn',
    },
}

export const SizeSmall: Story = {
    args: {
        size: 'sm',
        children: 'ButtonShadcn',
    },
}
