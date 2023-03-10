import * as S from './styles'

export type PageSectionProps = {
  title: string
  children: React.ReactNode
}

const PageSection = ({ title, children }: PageSectionProps) => (
  <S.Wrapper>
    <S.LeftContent></S.LeftContent>
    <S.RightContent></S.RightContent>
    <S.MainContent>
      <S.TitleContent>
        <S.Title>{title}</S.Title>
      </S.TitleContent>
      <S.Children>{children}</S.Children>
    </S.MainContent>
  </S.Wrapper>
)

export default PageSection
