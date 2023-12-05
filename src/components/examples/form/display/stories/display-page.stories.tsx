import { Meta, StoryObj } from '@storybook/react'
import { Separator } from '../../../../ui/separator'
import { DisplayForm } from '../display-form'

const meta = {
    title: 'Examples/display',
    component: () => (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">Display</h3>
                <p className="text-sm text-muted-foreground">
                    Turn items on or off to control what&apos;s displayed in the
                    app.
                </p>
            </div>
            <Separator />
            <DisplayForm />
        </div>
    ),
} satisfies Meta<{}>

export default meta

type Story = StoryObj<typeof meta>

export const DisplayPage: Story = {}
