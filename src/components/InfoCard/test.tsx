//import { render, screen } from '@testing-library/react'

import { Book } from '@styled-icons/ionicons-solid'
import { renderWithTheme } from 'utils/tests/helpers'
import InfoCard from '.'

const args = {
  icon: <Book size={20} />,
  title: 'education',
  items: [
    'Interrompida no 5º período: Engenharia de Produção - Universidade Federal de Ouro Preto - João Monlevade - Minas Gerais',
    'Cursando: Engenharia de Computação - Universidade Federal de Ouro Preto - João Monlevade - Minas Gerais',
    'Curso: React Avançado: Crie aplicações com NextJS, Strapi e mais',
    'Faço parte da comunidade CoDe'
  ]
}

describe('<InfoCard />', () => {
  it('should render the heading', () => {
    renderWithTheme(<InfoCard {...args} />)
  })
})
