import Divider from 'components/Divider'
import MediaMatch from 'components/MediaMatch'
import ProjectCard from 'components/ProjectCard'
import { useState } from 'react'
import PageSection from 'templates/PageSection'
import ProjectPage from 'templates/ProjectPage'
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
  const [deepFall, setDeepFall] = useState({
    isDeepFallProjects: false,
    isDeepFallProject: false
  })
  const [skyFall, setSkyFall] = useState({
    isSkyFallProjects: false,
    isSkyFallProject: false
  })

  const [display, setDisplay] = useState({ projects: true, project: false })

  const [isGlassMove, setIsGlassMove] = useState(false)
  const projectSelected = {
    deploy: 'https://www.linkedin.com/feed/',
    github: 'https://pedrolucasfv.github.io/',
    description: (
      <text>
        <p>
          Em 2020 eu fazia parte do time de robótica da universidade, estávamos
          em pandemia e sem aulas. Então eu e mais 4 amigos do time de robótica
          resolvemos nos increver em uma hackathon, uma maratona de programação
          organizada pelos alunos da USP na semana de engenharia da computação
          (SEnC). O desafio era fazer uma aplicação mobile que influenciasse na
          melhora do ensino da faculdade.
        </p>
        <p>
          Tivemos um brainstorm, colocamos todas as ideias no papel e chegamos a
          conclusão que o melhor seria uma espécie de rede social de projetos,
          onde os professores podiam postar projetos no feed e os alunos se
          conectarem aos projetos, já que não existia essa conexão de Aluno e
          Professor.
        </p>
        <p>
          Fizemos a aplicação usando React Native e Expo, e nessa época, ninguém
          do grupo sabia JavaScript, já que os integrantes focavam em
          eletrônicos. Passamos um final de semana aprendendo tecnologia nova e
          aplicando, programando semepre juntos no discord, foi muito divertido,
          um clima super agradável e nem sentíamos o cansaço. Fomos premiados
          com a primeira colocação, que foi uma surpresa na equipe, mas que
          quando analisamos todo o processo, foi muito merecido por todos.
        </p>
      </text>
    ),
    name: 'Pinça-me',
    image: '/img/pincame-print.png',
    items: ['React Native', 'Expo CLI', 'Javascript', 'CSS']
  }

  const changePage = (isProjects: boolean, isProject: boolean) => {
    setDeepFall({
      isDeepFallProjects: false,
      isDeepFallProject: false
    })
    setSkyFall({ isSkyFallProjects: false, isSkyFallProject: false })
    if (isProjects) {
      setIsGlassMove(true)
      setTimeout(
        () =>
          setDeepFall({
            isDeepFallProjects: true,
            isDeepFallProject: false
          }),
        700
      )
      setTimeout(() => setIsGlassMove(false), 2000)
      setTimeout(() => setDisplay({ projects: false, project: true }), 3000)
      setTimeout(
        () => setSkyFall({ isSkyFallProjects: false, isSkyFallProject: true }),
        3000
      )
    } else if (isProject) {
      setIsGlassMove(true)
      setTimeout(
        () =>
          setDeepFall({
            isDeepFallProjects: false,
            isDeepFallProject: true
          }),
        700
      )
      setTimeout(() => setIsGlassMove(false), 2000)
      setTimeout(() => setDisplay({ projects: true, project: false }), 3000)
      setTimeout(
        () => setSkyFall({ isSkyFallProjects: true, isSkyFallProject: false }),
        3000
      )
    }
  }

  return (
    <S.Wrapper>
      <S.Container
        isDeepFall={deepFall.isDeepFallProjects}
        isSkyFall={skyFall.isSkyFallProjects}
        isShow={!display.projects}
        id="containerProjects"
      >
        <Divider />
        <PageSection title="Projetos">
          <S.Content>
            {projects.map((project, index) => (
              <S.ProjectCard
                onClick={() => changePage(true, false)}
                key={index}
              >
                <ProjectCard {...project} />
              </S.ProjectCard>
            ))}
          </S.Content>
        </PageSection>
      </S.Container>
      <S.Container
        isDeepFall={deepFall.isDeepFallProject}
        isSkyFall={skyFall.isSkyFallProject}
        isShow={!display.project}
        id="containerProject"
      >
        <Divider />
        <PageSection title={projectSelected.name}>
          <ProjectPage {...projectSelected} />
        </PageSection>
      </S.Container>
      <MediaMatch greaterThan="medium">
        <S.Glass isAnimation={isGlassMove} />
        <S.RiverSide onClick={() => changePage(false, true)} />
      </MediaMatch>
    </S.Wrapper>
  )
}

export default Projects
