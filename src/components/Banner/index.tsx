import { useState } from 'react'
import * as S from './styles'
const Banner = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <S.Wrapper>
      <S.BorderContent>
        <S.Content>
          <S.ContentInfo>
            <S.Image />
            <S.Title>Pedro Lucas Ferreira Vieira </S.Title>
            <S.Description>Desenvolvedor Front End</S.Description>
            <S.Text onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
              <span>BEM VINDO</span>
              <span>BEM VINDO</span>
            </S.Text>
          </S.ContentInfo>
        </S.Content>
      </S.BorderContent>
      <S.Glass />
    </S.Wrapper>
  )
}
export default Banner
