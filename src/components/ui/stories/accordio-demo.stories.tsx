// import { expect } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../ui/accordion'

//meta
const meta = {
  title: 'Shadcn/accordion',
  component: () => (
    <Accordion type="single" collapsible className="w-80">
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<{}>

export default meta

type Story = StoryObj<typeof meta>

export const AcorrdionDemo: Story = {
  args: {},
}

export const AccordionWithOneItem: Story = {
  args: {},
  render: () => (
    <Accordion type="single" collapsible className="w-80">
      <AccordionItem value="item-1">
        <AccordionTrigger>Accordion</AccordionTrigger>
        <AccordionContent data-testid="description">
          A vertically stacked set of interactive headings that each reveal a
          section of content.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    //button
    const elementButtonControl = await canvas.findByRole('button')
    // await expect(elementButtonControl).toBeVisible()

    //required title
    // await expect(elemsentButtonControl.innerText).not.toBe('')

    //description
    await userEvent.click(elementButtonControl)
    const elementAccordionContent = await canvas.findByTestId('description')
    // await expect(elementAccordionContent).toBeVisible()

    //required description
    // await expect(elementButtonControl.innerText).not.toBe('')
  },
}
