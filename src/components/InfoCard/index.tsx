import * as S from './styles'

export type InfoCardProps = {
  icon?: JSX.Element
  title?: string
  items?: string[]
  titleButton?: string
  link?: string
  download?: boolean
}

const InfoCard = ({
  icon,
  items,
  title,
  titleButton,
  link = '/',
  download = false
}: InfoCardProps) => (
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
        <>
          {download ? (
            <S.Button href={link} download>
              {titleButton}
            </S.Button>
          ) : (
            <S.Button href={link} target="_blank">
              {titleButton}
            </S.Button>
          )}
        </>
      )}
    </S.Content>
  </S.Wrapper>
)

export default InfoCard
