import * as S from './styles'

export type InfoCardProps = {
  icon: JSX.Element
  title: string
  items: string[]
}

const InfoCard = ({ icon, items, title }: InfoCardProps) => (
  <S.Wrapper>
    <S.Content>
      <S.Icon>{icon}</S.Icon>
      <S.Title>{title}</S.Title>
      <S.Items>
        {items.map((item, index) => (
          <S.Item key={index}>{item}</S.Item>
        ))}
      </S.Items>
    </S.Content>
  </S.Wrapper>
)

export default InfoCard
