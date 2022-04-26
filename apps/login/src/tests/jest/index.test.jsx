import { render } from '@testing-library/react'
import Home from '../../pages/index'

describe('login', () => {
  it('renders a heading', () => {
    const { getByText } = render(<Home />)

    const heading = getByText(/LOGIN/i);

    expect(heading).toBeInTheDocument()
  })
})