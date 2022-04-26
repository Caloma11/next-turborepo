import { render } from '@testing-library/react'
import Web from '../../pages/index'
import '@testing-library/jest-dom'

describe('Web', () => {
  it('renders a heading', () => {
    const { getByText } = render(<Web />)

    const heading = getByText(/WELCOME TO WEB-APP/i);

    expect(heading).toBeInTheDocument()
  })
})