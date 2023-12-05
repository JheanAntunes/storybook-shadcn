import { Meta, StoryObj } from '@storybook/react'
import { Separator } from '../../../../ui/separator'
import { NotificationsForm } from '../notifications-form'

const meta = {
    title: 'Examples/notification',
    component: (args) => (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Notifications</h3>
                <p className="text-sm text-muted-foreground">
                    Configure how you receive notifications.
                </p>
            </div>
            <Separator />
            <NotificationsForm />
        </div>
    ),
} satisfies Meta<{}>

type Story = StoryObj<typeof meta>

export const NotificationPage: Story = {}

export default meta
