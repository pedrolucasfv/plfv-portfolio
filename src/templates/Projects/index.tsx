import Divider from 'components/Divider'
import MediaMatch from 'components/MediaMatch'
import ProjectCard from 'components/ProjectCard'
import { useState } from 'react'
import PageSection from 'templates/PageSection'
import ProjectPage from 'templates/ProjectPage'
import * as S from './styles'
import projectsMock from './mock'

export type ProjectSelectedProps = {
  name: string
  image: string
  description: React.ReactNode
  deploy?: string
  notion?: string
  github: string
  items: string[]
}

const Projects = () => {
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
  const [projectSelected, setProjectSelected] = useState<ProjectSelectedProps>({
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
  })

  const changePage = (
    isProjects: boolean,
    isProject: boolean,
    project: ProjectSelectedProps = projectSelected
  ) => {
    setProjectSelected(project)
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
      setTimeout(() => setDisplay({ projects: false, project: true }), 3500)
      setTimeout(
        () => setSkyFall({ isSkyFallProjects: false, isSkyFallProject: true }),
        3500
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
            {projectsMock.map((project, index) => (
              <S.ProjectCard
                onClick={() => changePage(true, false, project.project)}
                key={index}
              >
                <ProjectCard {...project.projectCard} />
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
          <S.Button onClick={() => changePage(false, true)}>VOLTAR</S.Button>
          <ProjectPage {...projectSelected} />
        </PageSection>
      </S.Container>
      <MediaMatch greaterThan="medium">
        <S.Glass isAnimation={isGlassMove} />
        <S.RiverSide />
      </MediaMatch>
    </S.Wrapper>
  )
}

export default Projects
