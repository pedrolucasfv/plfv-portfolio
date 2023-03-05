//import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Home from '.'

describe('<Home />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Home />)
  })
})
