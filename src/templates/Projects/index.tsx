import Divider from 'components/Divider'
import MediaMatch from 'components/MediaMatch'
import ProjectCard from 'components/ProjectCard'
import PageSection from 'templates/PageSection'
import * as S from './styles'

const Projects = () => {
  const projects = [
    {
      slug: 'https://audiophile-ecommerce-ols5.vercel.app/',
      description:
        'Audiophile é uma e-commerce com páginas dinâmicas, testes unitários, hooks personalizados, componentes bem escaláveis e tudo bem documentado.',
      name: 'Audiophile e-Commerce',
      image: '/img/audiophile-print.png'
    },
    {
      slug: 'https://ecommerce-product-page-vdsz.vercel.app/',
      description:
        'Uma página de produto de uma e-commerce, meu primeiro projeto feito em React, onde meu conhecimento não estava tão maduro.',
      name: 'E-commerce product page',
      image: '/img/ecommerceproductpage-print.png'
    },
    {
      slug: 'https://rps-game-livid.vercel.app/',
      description:
        'Um jogo de JoKenPo para treinar bem a lógica e a criação de componentes através do storybook',
      name: 'RPS-Game',
      image: '/img/rps-print.png'
    },
    {
      slug: 'https://rest-countries-api-vafe.vercel.app/',
      description:
        'Esse é um projeto de consulta a informação de países através de uma rest api.',
      name: 'Rest Countries Api',
      image: '/img/restcountriesapi-print.png'
    },
    {
      slug: '/',
      description: 'Esse é um projeto para fazer chamadas na Spotify API.',
      name: 'Spotify Web Player',
      image: '/img/spotifyweb-print.png'
    },
    {
      slug: '/',
      description:
        'Una landing page dinâmica, onde o conteúdo de acordo com a necessidade acessando o /admin.',
      name: 'Landing Page Skeleton',
      image: '/img/landingpageskeleton-print.png'
    },
    {
      slug: 'https://pedrolucasfv.github.io/calculator-app/',
      description:
        'Uma calculadora feita sem framework que tem a opção de mudar o tema.',
      name: 'Calculator App',
      image: '/img/calculatorapp-print.png'
    },
    {
      slug: 'https://pedrolucasfv.github.io/',
      description:
        'Projeto que ganhou o primeiro lugar na hackathon SEnC 2020, feito por mim e mais quatro alunos.',
      name: 'Pinça-me',
      image: '/img/pincame-print.png'
    }
  ]
  return (
    <S.Wrapper>
      <S.Container>
        <Divider />
        <PageSection title="Projetos">
          <S.Content>
            {projects.map((project, index) => (
              <S.ProjectCard href={project.slug} key={index}>
                <ProjectCard {...project} />
              </S.ProjectCard>
            ))}
          </S.Content>
        </PageSection>
      </S.Container>
      <MediaMatch greaterThan="medium">
        <S.Glass />
        <S.RiverSide />
      </MediaMatch>
    </S.Wrapper>
  )
}

export default Projects
