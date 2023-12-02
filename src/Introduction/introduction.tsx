import React from 'react'
import {
    TypographyH1,
    TypographyH2,
    TypographyMuted,
    TypographyP,
    TypographySmall,
} from '../components/typography/typography'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '../components/ui/accordion'

function Introduction() {
    return (
        <main className="">
            <div className="flex flex-col gap-1">
                <TypographyH1>Introduction</TypographyH1>
                <TypographyMuted>
                    Re-usable components built using Radix UI and Tailwind CSS.
                </TypographyMuted>
            </div>
            <TypographyP className="max-w-2xl">
                This is NOT a component library. It&#39;s a collection of
                re-usable components that you can copy and paste into your apps.
            </TypographyP>
            <section className="mt-6">
                <TypographyH2>
                    What do you mean by not a component library?
                </TypographyH2>
                <TypographyP className="max-w-2xl">
                    I mean you do not install it as a dependency. It is not
                    available or distributed via npm.
                </TypographyP>
                <TypographyP className="max-w-2xl">
                    Pick the components you need. Copy and paste the code into
                    your project and customize to your needs. The code is yours.
                </TypographyP>
                <TypographySmall className="italic">
                    Use this as a reference to build your own component
                    libraries.
                </TypographySmall>
            </section>
            <section className="mt-6">
                <TypographyH2>FAQ</TypographyH2>
                <Accordion
                    type="single"
                    collapsible
                    className="max-w-xs md:max-w-sm lg:max-w-2xl"
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            Why copy / paste and not packaged as a dependency?
                        </AccordionTrigger>
                        <AccordionContent>
                            <TypographyP className="max-w-2xl">
                                The idea behind this is to give you ownership
                                and control over the code, allowing you to
                                decide how the components are built and styled.
                            </TypographyP>
                            <TypographyP className="max-w-2xl">
                                Start with some sensible defaults, then
                                customize the components to your needs.
                            </TypographyP>
                            <TypographyP className="max-w-2xl">
                                One of the drawback of packaging the components
                                in an npm package is that the style is coupled
                                with the implementation.
                                <span className="italic">
                                    The design of your components should be
                                    separate from their implementation.
                                </span>
                            </TypographyP>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            Do you plan to publish it as an npm package?
                        </AccordionTrigger>
                        <AccordionContent>
                            No. I have no plans to publish it as an npm package.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            Which frameworks are supported?
                        </AccordionTrigger>
                        <AccordionContent>
                            You can use any framework that supports React.
                            Next.js, Astro, Remix, Gatsby etc.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            Can I use this in my project?
                        </AccordionTrigger>
                        <AccordionContent>
                            <TypographyP className="max-w-2xl">
                                Yes. Free to use for personal and commercial
                                projects. No attribution required.
                            </TypographyP>
                            <TypographyP className="max-w-2xl">
                                But hey, let me know if you do. I&#39;d love to
                                see what you build.
                            </TypographyP>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </main>
    )
}

export default Introduction
