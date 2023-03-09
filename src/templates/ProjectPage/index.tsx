import InfoCard from 'components/InfoCard'
import * as S from './styles'
import { Document } from '@styled-icons/ionicons-solid/Document'

export type ProjectPageProps = {
  image: string
  description: string
  deploy?: string
  github: string
  items: string[]
}

const ProjectPage = ({ description, image, items }: ProjectPageProps) => {
  return (
    <S.Wrapper>
      <S.UpContent>
        <S.Buttons>
          <InfoCard titleButton="Deploy" />
          <InfoCard titleButton="Github" />
        </S.Buttons>
        <S.Image src={image} />
      </S.UpContent>
      <S.DownContent>
        <InfoCard title="Tecnologias" icon={<Document />} items={items} />
        <S.Description>{description}</S.Description>
      </S.DownContent>
    </S.Wrapper>
  )
}

export default ProjectPage
