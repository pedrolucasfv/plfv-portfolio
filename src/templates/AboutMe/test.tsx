//import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import AboutMe from '.'

describe('<AboutMe />', () => {
  it('should render the heading', () => {
    renderWithTheme(<AboutMe />)
  })
})
