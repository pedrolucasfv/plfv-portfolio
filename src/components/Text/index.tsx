import { useEffect, useState } from 'react'
import * as S from './styles'
export type TextProps = {
  children: React.ReactNode
  id: string
}

const Text = ({ children, id }: TextProps) => {
  const [animation, setAnimation] = useState(false)
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (
        entries.some((entry) => entry.isIntersecting) &&
        entries.some((entry) => entry.boundingClientRect.y > 0)
      ) {
        setAnimation(true)
        console.log(entries)
      } else if (
        !entries.some((entry) => entry.isIntersecting) &&
        entries.some((entry) => entry.boundingClientRect.y > 0)
      ) {
        setAnimation(false)
      }
    })
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const text = document.querySelector(`#${id}`)!

    intersectionObserver.observe(text)
    return () => intersectionObserver.disconnect()
  }, [id])

  return (
    <S.Wrapper animate={animation} id={id}>
      {children}
    </S.Wrapper>
  )
}
export default Text
