import Divider from 'components/Divider'
import ProjectCard from 'components/ProjectCard'
import PageSection from 'templates/PageSection'
import * as S from './styles'

const Projects = () => {
  const projects = [
    {
      description: 'essa é uma e-commerce com páginas dinâmicas e testes',
      name: 'Audiophile e-Commerce',
      image: '/img/audiophile-print.png'
    },
    {
      description: 'essa é uma e-commerce com páginas dinâmicas e testes',
      name: 'Audiophile e-Commerce',
      image: '/img/audiophile-print.png'
    },
    {
      description: 'essa é uma e-commerce com páginas dinâmicas e testes',
      name: 'Audiophile e-Commerce',
      image: '/img/audiophile-print.png'
    },
    {
      description: 'essa é uma e-commerce com páginas dinâmicas e testes',
      name: 'Audiophile e-Commerce',
      image: '/img/audiophile-print.png'
    },
    {
      description: 'essa é uma e-commerce com páginas dinâmicas e testes',
      name: 'Audiophile e-Commerce',
      image: '/img/audiophile-print.png'
    },
    {
      description: 'essa é uma e-commerce com páginas dinâmicas e testes',
      name: 'Audiophile e-Commerce',
      image: '/img/audiophile-print.png'
    },
    {
      description: 'essa é uma e-commerce com páginas dinâmicas e testes',
      name: 'Audiophile e-Commerce',
      image: '/img/audiophile-print.png'
    }
  ]
  return (
    <S.Wrapper>
      <S.Container>
        <Divider />
        <PageSection title="Projects">
          <S.Content>
            {projects.map((project, index) => (
              <S.ProjectCard key={index}>
                <ProjectCard {...project} />
              </S.ProjectCard>
            ))}
          </S.Content>
        </PageSection>
      </S.Container>
      <S.Glass />
      <S.RiverSide />
    </S.Wrapper>
  )
}

export default Projects
