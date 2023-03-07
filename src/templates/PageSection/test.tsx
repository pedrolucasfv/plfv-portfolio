//import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import PageSection from '.'

describe('<PageSection />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <PageSection title="kk">
        <h1>kk</h1>
      </PageSection>
    )
  })
})
