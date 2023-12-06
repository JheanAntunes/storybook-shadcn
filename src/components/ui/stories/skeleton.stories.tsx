import { Meta, StoryObj } from '@storybook/react'
import { buttonVariants } from '../button'
import { Skeleton } from '../skeleton'

const meta = {
    title: 'Shadcn/skeleton',
    component: () => (
        <div className="flex w-96 items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full bg-slate-300" />
            <div className="space-y-2">
                <Skeleton className="h-4 w-[250px] bg-slate-300" />
                <Skeleton className="h-4 w-[200px] bg-slate-300" />
            </div>
        </div>
    ),
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Skeleton>

export default meta

type Story = StoryObj<typeof meta>

export const SkeletonUser: Story = {
    args: {},
}

export const SkeletonCardNotification: Story = {
    args: {},
    render: () => (
        <>
            <Skeleton className="flex h-64 w-[250px] flex-col gap-2 bg-slate-300 p-5">
                <div className="flex flex-col gap-2">
                    <Skeleton className="h-6 w-20 bg-slate-400" />
                    <Skeleton className="h-4 w-20 bg-slate-400" />
                </div>

                <Skeleton className="rounred h-16 w-full bg-slate-400 " />
                <Skeleton className="h-4 w-full bg-slate-400" />
                <Skeleton className="h-4 w-full bg-slate-400" />
                <Skeleton className="h-4 w-full bg-slate-400" />

                <Skeleton
                    className={
                        buttonVariants({
                            variant: 'default',
                            size: 'default',
                        }) + ' w-full bg-slate-400'
                    }
                />
            </Skeleton>
        </>
    ),
}
