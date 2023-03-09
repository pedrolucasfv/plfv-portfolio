import * as S from './styles'

export type InfoCardProps = {
  icon?: JSX.Element
  title?: string
  items?: string[]
  titleButton?: string
}

const InfoCard = ({ icon, items, title, titleButton }: InfoCardProps) => (
  <S.Wrapper>
    <S.Content>
      <S.Icon>{icon}</S.Icon>
      <S.Title>{title}</S.Title>
      {items ? (
        <S.Items>
          {items?.map((item, index) => (
            <S.Item key={index}>{item}</S.Item>
          ))}
        </S.Items>
      ) : (
        <S.Button href="/resume/Pedro_Lucas_FV_currículo.pdf" download>
          {titleButton ? titleButton : 'Download'}
        </S.Button>
      )}
    </S.Content>
  </S.Wrapper>
)

export default InfoCard
