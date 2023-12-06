import { Meta, StoryObj } from '@storybook/react'
import Image from 'next/image'
import { ScrollAreaDemo } from '../demo/Scroll-area-demo'
import { ScrollArea, ScrollBar } from '../scroll-area'

interface Artwork {
    artist: string
    art: string
}

const works: Artwork[] = [
    {
        artist: 'Ornella Binni',
        art: 'https://images.unsplash.com/photo-1465869185982-5a1a7522cbcb?auto=format&fit=crop&w=300&q=80',
    },
    {
        artist: 'Tom Byrom',
        art: 'https://images.unsplash.com/photo-1548516173-3cabfa4607e9?auto=format&fit=crop&w=300&q=80',
    },
    {
        artist: 'Vladimir Malyavko',
        art: 'https://images.unsplash.com/photo-1494337480532-3725c85fd2ab?auto=format&fit=crop&w=300&q=80',
    },
]

//meta === docs do componente, os types de controls, posição do elemento, valores inicias, armazenar o componente
const meta = {
    title: 'Shadcn/scroll-area',
    component: ScrollAreaDemo,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof ScrollAreaDemo>

export default meta

type Story = StoryObj<typeof meta>

//render componente
export const ScrollAreaVertical: Story = {
    args: {},
}
export const ScrollAreaHorizontal: Story = {
    args: {},
    render: () => {
        return (
            <>
                <ScrollArea className="w-96 whitespace-nowrap rounded-md border">
                    <div className="flex w-max space-x-4 p-4">
                        {works.map((artwork) => (
                            <figure key={artwork.artist} className="shrink-0">
                                <div className="overflow-hidden rounded-md">
                                    <Image
                                        src={artwork.art}
                                        alt={`Photo by ${artwork.artist}`}
                                        className="aspect-[3/4] h-fit w-fit object-cover"
                                        width={300}
                                        height={400}
                                    />
                                </div>
                                <figcaption className="pt-2 text-xs text-muted-foreground">
                                    Photo by{' '}
                                    <span className="font-semibold text-foreground">
                                        {artwork.artist}
                                    </span>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>
            </>
        )
    },
}
