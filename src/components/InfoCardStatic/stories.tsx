import { Story, Meta } from '@storybook/react'
import InfoCard, { InfoCardProps } from '.'
import { Book } from '@styled-icons/ionicons-solid/Book'

export default {
  title: 'InfoCard',
  component: InfoCard,
  args: {
    icon: <Book size={20} />,
    title: 'education',
    items: [
      'Interrompida no 5º período: Engenharia de Produção - Universidade Federal de Ouro Preto - João Monlevade - Minas Gerais',
      'Cursando: Engenharia de Computação - Universidade Federal de Ouro Preto - João Monlevade - Minas Gerais',
      'Curso: React Avançado: Crie aplicações com NextJS, Strapi e mais',
      'Faço parte da comunidade CoDe'
    ]
  }
} as Meta

export const Default: Story<InfoCardProps> = (args) => (
  <div style={{ margin: '3rem 3rem' }}>
    <InfoCard {...args} />
  </div>
)
