import InfoCard from 'components/InfoCard'
import * as S from './styles'
import { Document } from '@styled-icons/ionicons-solid/Document'
import { LogoGithub } from '@styled-icons/ionicons-solid/LogoGithub'
import { Desktop } from '@styled-icons/ionicons-solid/Desktop'

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
            <InfoCard titleButton="Deploy" icon={<Desktop />} link={deploy} />
          )}
          {notion && (
            <InfoCard titleButton="Notion" icon={<Document />} link={notion} />
          )}
          {github && (
            <InfoCard
              titleButton="Github"
              icon={<LogoGithub />}
              link={github}
            />
          )}
        </S.Buttons>
        <S.Technologies>
          <InfoCard title="Tecnologias" icon={<Document />} items={items} />
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
