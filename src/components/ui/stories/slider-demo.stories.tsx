import { Meta, StoryObj } from '@storybook/react'
import { cn } from '../../../lib/utils'
import { Slider } from '../slider'

type SliderProps = React.ComponentProps<typeof Slider>

const meta = {
    title: 'Shadcn/slider',
    component: (props) => (
        <Slider
            defaultValue={[50]}
            max={100}
            step={1}
            className={cn('w-[60%]', props.className)}
            {...props}
        />
    ),
} satisfies Meta<SliderProps>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {},
}
