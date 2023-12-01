import { Meta, StoryObj } from '@storybook/react'
import {
    TypographyH1,
    TypographyH2,
    TypographyH3,
    TypographyH4,
    TypographyP,
    TypographyLarge,
    TypographySmall,
    TypographyLead,
    TypographyBlockquote,
    TypographyInlineCode,
    TypographyList,
    TypographyMuted,
    TypographyTable,
} from '../typography'

const meta = {
    title: 'Shadcn/tipography',
    component: TypographyH1,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof TypographyH1>
export default meta

type Story = StoryObj<typeof meta>

export const H1: Story = {
    args: {
        children: 'Taxing Laughter: The Joke Tax Chronicles',
    },
}
export const H2: Story = {
    args: {
        ...H1.args,
        children: 'The People of the Kingdom',
    },
    render: (args) => {
        return <TypographyH2>{args.children}</TypographyH2>
    },
}
export const H3: Story = {
    args: { ...H1.args, children: 'The Joke Tax' },
    render: (args) => {
        return <TypographyH3>{args.children}</TypographyH3>
    },
}
export const H4: Story = {
    args: { ...H1.args, children: 'People stopped telling jokes' },
    render: (args) => {
        return <TypographyH4>{args.children}</TypographyH4>
    },
}
export const P: Story = {
    args: {
        ...H1.args,
        children:
            'The king, seeing how much happier his subjects were, realized the error of his ways and repealed the joke tax.',
    },
    render: (args) => {
        return <TypographyP>{args.children}</TypographyP>
    },
}
export const Blockquote: Story = {
    args: {
        ...H1.args,
        children:
            '"After all," he said, "everyone enjoys a good joke, so it`s only fair that they should pay for the privilege."',
    },
    render: (args) => {
        return <TypographyBlockquote>{args.children}</TypographyBlockquote>
    },
}
export const Table: Story = {
    render: (args) => {
        return <TypographyTable />
    },
}
export const List: Story = {
    render: (args) => {
        return <TypographyList />
    },
}
export const InlineCode: Story = {
    args: {
        ...H1.args,
        children: '@radix-ui/react-alert-dialog',
    },
    render: (args) => {
        return <TypographyInlineCode>{args.children}</TypographyInlineCode>
    },
}
export const Lead: Story = {
    args: {
        ...H1.args,
        children:
            ' A modal dialog that interrupts the user with important content and expects a response.',
    },
    render: (args) => {
        return <TypographyLead>{args.children}</TypographyLead>
    },
}
export const Large: Story = {
    args: {
        ...H1.args,
        children: 'Are you sure absolutely sure?',
    },
    render: (args) => {
        return <TypographyLarge>{args.children}</TypographyLarge>
    },
}
export const Small: Story = {
    args: {
        ...H1.args,
        children: 'Email address',
    },
    render: (args) => {
        return <TypographySmall>{args.children}</TypographySmall>
    },
}
export const Muted: Story = {
    args: {
        ...H1.args,
        children: 'Enter your email address.',
    },
    render: (args) => {
        return <TypographyMuted>{args.children}</TypographyMuted>
    },
}
