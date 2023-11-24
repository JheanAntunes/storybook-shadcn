import Home from '@/app/page'
import { render, screen } from '@testing-library/react'

describe('Home', () => {
  it('should render the text in home page', () => {
    render(<Home />)

    const text = screen.getByText('Docs')
    expect(text).toBeVisible()
  })
})
