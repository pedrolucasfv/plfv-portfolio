//import { render, screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import Banner from '.'

describe('<Banner />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Banner />)
  })
})
