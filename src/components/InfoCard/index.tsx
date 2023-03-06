import * as S from './styles'

export type InfoCardProps = {
  icon: JSX.Element
  title: string
  items?: string[]
}

const InfoCard = ({ icon, items, title }: InfoCardProps) => (
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
        <S.Button>Download</S.Button>
      )}
    </S.Content>
  </S.Wrapper>
)

export default InfoCard
