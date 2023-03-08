import * as S from './styles'

export type ProjectCardProps = {
  slug: string
  image: string
  name: string
  description: string
}

const ProjectCard = ({ description, image, name }: ProjectCardProps) => (
  <S.Wrapper>
    <S.ImageContent>
      <S.Image src={image} aria-label="Project image" />
    </S.ImageContent>
    <S.InfoContent>
      <S.Name>{name}</S.Name>
      <S.Description>{description}</S.Description>
    </S.InfoContent>
  </S.Wrapper>
)

export default ProjectCard
