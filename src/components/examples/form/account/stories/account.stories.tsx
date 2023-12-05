import { Meta, StoryObj } from '@storybook/react'
import { Separator } from '../../../../ui/separator'
import { AccountForm } from '../account-form'

const meta = {
    title: 'Examples/form',
    component: () => (
        <>
            <div className="space-y-6 max-w-xl">
                <div>
                    <h3 className="text-lg font-medium">Account</h3>
                    <p className="text-sm text-muted-foreground">
                        Update your account settings. Set your preferred
                        language and timezone.
                    </p>
                </div>
                <Separator />
                <AccountForm />
            </div>
        </>
    ),
} satisfies Meta<{}>

export default meta

type Story = StoryObj<typeof meta>

export const PageAccountForm: Story = {}
