import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import ProjectCard from '.'

const args = {
  image: '/img/audiophile-print.png',
  name: 'audiophile',
  description:
    'A e-commerce website selling audio gear, a frontend mentor challenge level guru'
}

describe('<ProjectCard />', () => {
  it('should render the component correctly', () => {
    renderWithTheme(<ProjectCard {...args} />)
    expect(
      screen.getByRole('heading', { name: /audiophile/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /A e-commerce website selling audio gear, a frontend mentor challenge level guru/i
      })
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/Project image/i)).toHaveAttribute(
      'src',
      '/img/audiophile-print.png'
    )
  })
})
