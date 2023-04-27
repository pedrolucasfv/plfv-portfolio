import { Desktop } from '@styled-icons/ionicons-solid/Desktop'
import { Document } from '@styled-icons/ionicons-solid/Document'
import { LogoGithub } from '@styled-icons/ionicons-solid/LogoGithub'
import { Rocket } from '@styled-icons/ionicons-solid/Rocket'
import InfoCard from 'components/InfoCard'
import * as S from './styles'

export type ProjectPageProps = {
  image: string
  description: React.ReactNode
  deploy?: string
  notion?: string
  github: string
  items: string[]
}

const ProjectPage = ({
  description,
  image,
  items,
  deploy,
  notion,
  github
}: ProjectPageProps) => {
  return (
    <S.Wrapper>
      <S.LeftContent>
        <S.Buttons>
          {deploy && (
            <InfoCard
              title="Deploy"
              icon={<Desktop />}
              link={deploy}
              stopAnimation
            />
          )}
          {notion && (
            <InfoCard
              title="NotioN"
              icon={<Document />}
              link={notion}
              stopAnimation
            />
          )}
          {github && (
            <InfoCard
              title="Github"
              icon={<LogoGithub />}
              link={github}
              stopAnimation
            />
          )}
        </S.Buttons>
        <S.Technologies>
          <InfoCard
            title="Tecnologias"
            icon={<Rocket />}
            items={items}
            stopAnimation
          />
        </S.Technologies>
      </S.LeftContent>
      <S.RightContent>
        <S.Media>
          <S.Image src={image} />
        </S.Media>
        <S.Description>{description}</S.Description>
      </S.RightContent>
    </S.Wrapper>
  )
}

export default ProjectPage
