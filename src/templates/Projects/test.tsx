//import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Projects from '.'

describe('<Projects />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Projects />)
  })
})
