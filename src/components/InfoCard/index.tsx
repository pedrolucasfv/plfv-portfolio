import { useEffect, useState } from 'react'
import * as S from './styles'

export type InfoCardProps = {
  icon?: JSX.Element
  title: string
  items?: string[]
  titleButton?: string
  link?: string
  download?: boolean
  stopAnimation?: boolean
}

const InfoCard = ({
  icon,
  items,
  title,
  link = '/',
  download = false,
  stopAnimation = false
}: InfoCardProps) => {
  const [animation, setAnimation] = useState(false)
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (
        entries.some((entry) => entry.isIntersecting) &&
        entries.some((entry) => entry.boundingClientRect.y > 0)
      ) {
        setAnimation(true)
      } else if (
        !entries.some((entry) => entry.isIntersecting) &&
        entries.some((entry) => entry.boundingClientRect.y > 0)
      ) {
        if (!stopAnimation) {
          setAnimation(false)
        }
      }
    })
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const text = document.querySelector(`#${title}`)!

    intersectionObserver.observe(text)
    return () => intersectionObserver.disconnect()
  }, [title, stopAnimation])

  return (
    <S.Wrapper id={title} animate={animation} stopAnimation={stopAnimation}>
      <S.Content>
        <S.Icon>{icon}</S.Icon>
        {items ? (
          <S.Items>
            <S.Title>{title}</S.Title>
            {items?.map((item, index) => (
              <S.Item key={index}>{item}</S.Item>
            ))}
          </S.Items>
        ) : (
          <>
            {download ? (
              <S.Button href={link} download>
                {title}
              </S.Button>
            ) : (
              <S.Button href={link} target="_blank">
                {title}
              </S.Button>
            )}
          </>
        )}
      </S.Content>
    </S.Wrapper>
  )
}
export default InfoCard
