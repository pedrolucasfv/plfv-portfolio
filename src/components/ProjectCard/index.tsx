import * as S from './styles'

export type ProjectCardProps = {
  slug: string
  image: string
  name: string
  description: string
  type?: 'none' | 'Melhor Projeto' | 'Freelance' | 'Refatorado' | 'Hackathon'
}

const ProjectCard = ({
  description,
  image,
  name,
  type = 'none'
}: ProjectCardProps) => (
  <S.Wrapper>
    <S.ImageContent>
      <S.Image src={image} aria-label="Project image" />
    </S.ImageContent>
    <S.InfoContent>
      <S.Name>{name}</S.Name>
      <S.Description>{description}</S.Description>
    </S.InfoContent>
    <S.Status type={type}>
      {type != 'none' && (
        <>
          <div />
          {type}
        </>
      )}
    </S.Status>
  </S.Wrapper>
)

export default ProjectCard
