import { Meta, StoryObj } from '@storybook/react'
import { Separator } from '../separator'

const meta = {
    title: 'Shadcn/separator',
    component: () => (
        <div>
            <div className="space-y-1">
                <h4 className="text-sm font-medium leading-none">
                    Radix Primitives
                </h4>
                <p className="text-sm text-muted-foreground">
                    An open-source UI component library.
                </p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
                <div>Blog</div>
                <Separator orientation="vertical" />
                <div>Docs</div>
                <Separator orientation="vertical" />
                <div>Source</div>
            </div>
        </div>
    ),
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<{}>

export default meta

type Story = StoryObj<typeof meta>

export const SeparatorDemo: Story = {
    args: {},
}

export const SeparatorHorizontal: Story = {
    args: {},
    render: () => (
        <>
            <div className="flex flex-col gap-2">
                <h1>Shadcn-ui</h1>
                <Separator orientation="horizontal" />
                <p>
                    This is NOT a component library. Its a collection of
                    re-usable components that you can copy and paste into your
                    apps.
                </p>
            </div>
        </>
    ),
}

export const SeparatorVertical: Story = {
    args: {},
    render: () => (
        <>
            <div className="flex gap-2">
                <span>Shadcn</span>
                <Separator orientation="vertical" />
                <span>UI</span>
            </div>
        </>
    ),
}
