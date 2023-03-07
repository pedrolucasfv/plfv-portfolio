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
      description: 'Uma página de produto de uma e-commerce',
      name: 'E-commerce product page',
      image: '/img/ecommerceproductpage-print.png'
    },
    {
      description: 'Um jogo de JoKenPo com outras funções',
      name: 'RPS-Game',
      image: '/img/rps-print.png'
    },
    {
      description:
        'Esse é um projeto de consulta a informação de países através de uma rest api',
      name: 'Rest Countries Api',
      image: '/img/restcountriesapi-print.png'
    },
    {
      description: 'Esse é um projeto para fazer chamadas na Spotify API',
      name: 'Spotify Web Player',
      image: '/img/spotifyweb-print.png'
    },
    {
      description:
        'Una landing page dinâmica, onde o conteúdo de acordo com a necessidade acessando o /admin',
      name: 'Landing Page Skeleton',
      image: '/img/landingpageskeleton-print.png'
    },
    {
      description:
        'Uma calculadora feita sem framework que tem a opção de mudar o tema',
      name: 'Calculator App',
      image: '/img/calculatorapp-print.png'
    }
  ]
  return (
    <S.Wrapper>
      <S.Container>
        <Divider />
        <PageSection title="Projetos">
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
