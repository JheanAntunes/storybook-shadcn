import { Meta, StoryObj } from '@storybook/react'
import { AppearanceForm } from '../appearance-form'
import { Separator } from '../../../ui/separator'
const meta = {
    title: 'Examples/appearance',
    component: () => (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Appearance</h3>
                <p className="text-sm text-muted-foreground">
                    Customize the appearance of the app. Automatically switch
                    between day and night themes.
                </p>
            </div>
            <Separator />
            <AppearanceForm />
        </div>
    ),
} satisfies Meta<{}>

type Story = StoryObj<typeof meta>

export const AppearancePage: Story = {}

export default meta
