import { Meta, StoryObj, Decorator } from '@storybook/react'
import { ToastDemo } from '../demo/toast-data-demo'
import { Toaster } from '../toaster'

// Decoradores: https://storybook.js.org/docs/react/writing-stories/decorators#page-top
// recomendo a leitura, tem até video.
const LayoutRaizWithToaster: Decorator = (Story) => (
    <div>
        <Toaster />
        <Story />
    </div>
)

const meta = {
    title: 'Shadcn/toast',
    component: ToastDemo,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'destructive'],
        },
    },
    parameters: {},
    decorators: [LayoutRaizWithToaster],
} satisfies Meta<typeof ToastDemo>

export default meta

type Story = StoryObj<typeof meta>

export const Toast: Story = {
    args: {
        title: 'Shadcn-ui',
        description: 'like shadcn-ui',
    },
}
export const ToastStyleDestructive: Story = {
    args: {
        title: 'Shadcn-ui',
        description: 'not like shadcn-ui',
        variant: 'destructive',
    },
}

export const ToastNotDescription: Story = {
    args: {
        title: 'Shadcn-ui',
    },
}

export const ToastNotTitle: Story = {
    args: {
        description: 'like shadcn-ui',
    },
}
