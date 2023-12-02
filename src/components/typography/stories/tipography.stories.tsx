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
    TypographyListItem,
} from '../typography'

const meta = {
    title: 'Typography/Typography',
    component: TypographyH1,
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
        return (
            <TypographyList>
                <TypographyListItem>
                    1st level of puns: 5 gold coins
                </TypographyListItem>
                <TypographyListItem>
                    2nd level of jokes: 10 gold coins
                </TypographyListItem>
                <TypographyListItem>
                    3rd level of one-liners : 20 gold coins
                </TypographyListItem>
            </TypographyList>
        )
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

export const History: Story = {
    render: (args) => {
        return (
            <div>
                <TypographyH1>The Joke Tax Chronicles</TypographyH1>
                <TypographyP>
                    Once upon a time, in a far-off land, there was a very lazy
                    king who spent all day lounging on his throne. One day, his
                    advisors came to him with a problem: the kingdom was running
                    out of money.
                </TypographyP>
                <TypographyH2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                    The Kings Plan
                </TypographyH2>
                <TypographyP>
                    The king thought long and hard, and finally came up with
                    <a
                        href="#"
                        className="font-medium text-primary underline underline-offset-4"
                    >
                        a brilliant plan
                    </a>
                    : he would tax the jokes in the kingdom.
                </TypographyP>
                <TypographyBlockquote>
                    After all, he said, everyone enjoys a good joke, so its only
                    fair that they should pay for the privilege.
                </TypographyBlockquote>
                <TypographyH3>The Joke Tax</TypographyH3>
                <TypographyP>
                    The kings subjects were not amused. They grumbled and
                    complained, but the king was firm:
                </TypographyP>
                <TypographyList>
                    <TypographyListItem>
                        1st level of puns: 5 gold coins
                    </TypographyListItem>
                    <TypographyListItem>
                        2nd level of jokes: 10 gold coins
                    </TypographyListItem>
                    <TypographyListItem>
                        3rd level of one-liners : 20 gold coins
                    </TypographyListItem>
                </TypographyList>
                <TypographyP>
                    As a result, people stopped telling jokes, and the kingdom
                    fell into a gloom. But there was one person who refused to
                    let the kings foolishness get him down: a court jester named
                    Jokester.
                </TypographyP>
                <TypographyH3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                    Jokesters Revolt
                </TypographyH3>
                <TypographyP>
                    Jokester began sneaking into the castle in the middle of the
                    night and leaving jokes all over the place: under the kings
                    pillow, in his soup, even in the royal toilet. The king was
                    furious, but he couldnt seem to stop Jokester.
                </TypographyP>
                <TypographyP>
                    And then, one day, the people of the kingdom discovered that
                    the jokes left by Jokester were so funny that they couldnt
                    help but laugh. And once they started laughing, they couldnt
                    stop.
                </TypographyP>
                <TypographyH3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
                    The Peoples Rebellion
                </TypographyH3>
                <TypographyP>
                    The people of the kingdom, feeling uplifted by the laughter,
                    started to tell jokes and puns again, and soon the entire
                    kingdom was in on the joke.
                </TypographyP>
                <TypographyTable />
                <TypographyP>
                    The king, seeing how much happier his subjects were,
                    realized the error of his ways and repealed the joke tax.
                    Jokester was declared a hero, and the kingdom lived happily
                    ever after.
                </TypographyP>
                <TypographyP>
                    The moral of the story is: never underestimate the power of
                    a good laugh and always be careful of bad ideas.
                </TypographyP>
            </div>
        )
    },
}
