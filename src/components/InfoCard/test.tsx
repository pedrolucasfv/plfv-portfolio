//import { render, screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import InfoCard from '.'

describe('<InfoCard />', () => {
  it('should render the heading', () => {
    renderWithTheme(<InfoCard />)
  })
})
