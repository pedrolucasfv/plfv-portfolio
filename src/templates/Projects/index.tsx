import Divider from 'components/Divider'
import MediaMatch from 'components/MediaMatch'
import ProjectCard from 'components/ProjectCard'
import { useState } from 'react'
import { Link } from 'react-scroll'
import PageSection from 'templates/PageSection'
import ProjectPage from 'templates/ProjectPage'
import projectsMock from './mock'
import * as S from './styles'

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
    deploy: '',
    github: '',
    description: <text />,
    name: '',
    image: '',
    items: ['']
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
    if (window.matchMedia('(min-width:600px)').matches) {
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
          () =>
            setSkyFall({ isSkyFallProjects: false, isSkyFallProject: true }),
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
        setTimeout(() => setDisplay({ projects: true, project: false }), 3500)
        setTimeout(
          () =>
            setSkyFall({ isSkyFallProjects: true, isSkyFallProject: false }),
          3500
        )
      }
    } else {
      if (isProjects) setDisplay({ projects: false, project: true })
      else if (isProject) setDisplay({ projects: true, project: false })
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
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
                key={index}
              >
                <S.ProjectCard
                  onClick={() => changePage(true, false, project.project)}
                >
                  <ProjectCard {...project.projectCard} />
                </S.ProjectCard>
              </Link>
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
        <S.Button onClick={() => changePage(false, true)}>VOLTAR</S.Button>
        <PageSection title={projectSelected.name}>
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
