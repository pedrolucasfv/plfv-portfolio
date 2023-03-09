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

const ProjectPage = ({ description, image, items }: ProjectPageProps) => {
  return (
    <S.Wrapper>
      <S.Buttons>
        <InfoCard titleButton="Deploy" icon={<Desktop />} />
        <InfoCard titleButton="Github" icon={<LogoGithub />} />
        <InfoCard titleButton="Github" icon={<LogoGithub />} />
      </S.Buttons>
      <S.Media>
        <S.Image src={image} />
      </S.Media>
      <InfoCard title="Tecnologias" icon={<Document />} items={items} />
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  )
}

export default ProjectPage
