import { useState } from 'react'
import * as S from './styles'
const Banner = () => {
  return (
    <S.Wrapper>
      <S.BorderContent>
        <S.Content>
          <S.ContentInfo>
            <S.Image />
            <S.Title>Pedro L. F. Vieira</S.Title>
            <S.Description>Full Stack Developer</S.Description>
            <S.Text>
              <span>WELCOME</span>
              <span>WELCOME</span>
            </S.Text>
          </S.ContentInfo>
        </S.Content>
      </S.BorderContent>
      <S.Glass />
    </S.Wrapper>
  )
}
export default Banner
