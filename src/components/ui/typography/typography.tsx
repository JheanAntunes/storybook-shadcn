export function TypographyH1() {
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Taxing Laughter: The Joke Tax Chronicles
        </h1>
    )
}

export function TypographyH2() {
    return (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            The People of the Kingdom
        </h2>
    )
}

export function TypographyH3() {
    return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            The Joke Tax
        </h3>
    )
}

export function TypographyH4() {
    return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            People stopped telling jokes
        </h4>
    )
}

export function TypographyP() {
    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            The king, seeing how much happier his subjects were, realized the
            error of his ways and repealed the joke tax.
        </p>
    )
}

export function TypographyBlockquote() {
    return (
        <blockquote className="mt-6 border-l-2 pl-6 italic">
            &quot;After all,&quot; he said, &quot;everyone enjoys a good joke,
            so it&quot;s only fair that they should pay for the privilege.&quot;
        </blockquote>
    )
}

export function TypographyTable() {
    return (
        <div className="my-6 w-full overflow-y-auto">
            <table className="w-full">
                <thead>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                        <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                            King&quot;s Treasury
                        </th>
                        <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
                            People&quot;s happiness
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                            Empty
                        </td>
                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                            Overflowing
                        </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                            Modest
                        </td>
                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                            Satisfied
                        </td>
                    </tr>
                    <tr className="m-0 border-t p-0 even:bg-muted">
                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                            Full
                        </td>
                        <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
                            Ecstatic
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export function TypographyList() {
    return (
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>1st level of puns: 5 gold coins</li>
            <li>2nd level of jokes: 10 gold coins</li>
            <li>3rd level of one-liners : 20 gold coins</li>
        </ul>
    )
}

export function TypographyInlineCode() {
    return (
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            @radix-ui/react-alert-dialog
        </code>
    )
}

export function TypographyLead() {
    return (
        <p className="text-xl text-muted-foreground">
            A modal dialog that interrupts the user with important content and
            expects a response.
        </p>
    )
}

export function TypographyLarge() {
    return (
        <div className="text-lg font-semibold">
            Are you sure absolutely sure?
        </div>
    )
}

export function TypographySmall() {
    return (
        <small className="text-sm font-medium leading-none">
            Email address
        </small>
    )
}

export function TypographyMuted() {
    return (
        <p className="text-sm text-muted-foreground">
            Enter your email address.
        </p>
    )
}
