import { Meta, StoryObj } from '@storybook/react'
import { cn } from '../../../../lib/utils'
import { DemoCookieSettings } from '../components/cookie-settings'
import { DemoCreateAccount } from '../components/create-account'
import { DemoDatePicker } from '../components/date-picker'
import { DemoGithub } from '../components/github-card'
import { DemoNotifications } from '../components/notifications'
import { DemoPaymentMethod } from '../components/payment-method'
import { DemoReportAnIssue } from '../components/report-an-issue'
import { DemoShareDocument } from '../components/share-document'
import { DemoTeamMembers } from '../components/team-members'
import Image from 'next/image'
import ImgCardDark from '../assets/cards-dark.png'
import ImgCardLight from '../assets/cards-light.png'

function DemoContainer({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                'flex items-center justify-center [&>div]:w-full',
                className,
            )}
            {...props}
        />
    )
}

const meta = {
    title: 'Examples/cards',
    component: (args) => {
        return (
            <>
                <div className="md:hidden">
                    <Image
                        src={ImgCardDark}
                        width={1280}
                        height={1214}
                        alt="Cards"
                        className="block dark:hidden"
                    />
                    <Image
                        src={ImgCardLight}
                        width={1280}
                        height={1214}
                        alt="Cards"
                        className="hidden dark:block"
                    />
                </div>
                <div className="hidden items-start justify-center gap-6 rounded-lg p-8 md:grid lg:grid-cols-2 xl:grid-cols-3">
                    <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
                        <DemoContainer>
                            <DemoCreateAccount />
                        </DemoContainer>
                        <DemoContainer>
                            <DemoPaymentMethod />
                        </DemoContainer>
                    </div>
                    <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
                        <DemoContainer>
                            <DemoTeamMembers />
                        </DemoContainer>
                        <DemoContainer>
                            <DemoShareDocument />
                        </DemoContainer>
                        <DemoContainer>
                            <DemoDatePicker />
                        </DemoContainer>
                        <DemoContainer>
                            <DemoNotifications />
                        </DemoContainer>
                    </div>
                    <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
                        <DemoContainer>
                            <DemoReportAnIssue />
                        </DemoContainer>
                        <DemoContainer>
                            <DemoGithub />
                        </DemoContainer>
                        <DemoContainer>
                            <DemoCookieSettings />
                        </DemoContainer>
                    </div>
                </div>
            </>
        )
    },
} satisfies Meta<{}>

export default meta

type Story = StoryObj<typeof meta>

export const Cards: Story = {}
