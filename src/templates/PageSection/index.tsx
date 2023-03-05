import * as S from './styles'

export type PageSectionProps = {
  title: string
}

const PageSection = ({ title }: PageSectionProps) => (
  <S.Wrapper>
    <S.LeftContent></S.LeftContent>
    <S.RightContent></S.RightContent>
    <S.MainContent>
      <S.Title>{title}</S.Title>
    </S.MainContent>
  </S.Wrapper>
)

export default PageSection
