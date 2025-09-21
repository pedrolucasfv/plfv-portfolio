import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Wrapper as InfoCardStaticWrapper } from 'components/InfoCardStatic/styles'
export const Wrapper = styled.main`
  ${media.greaterThan('medium')`
   width: 75%;
  `}
  display: flex;
  padding-bottom: 4rem;
  ${media.lessThan('medium')`
    flex-direction: column;
    `}
`
export const Media = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
type ImageProps = {
  src: string
}
export const Image = styled.div<ImageProps>`
  ${({ src, theme }) => css`
    height: 20rem;
    width: 45rem;

    /* Mostra a imagem inteira */
    background-image: url(${src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain; /* <- antes estava cover */
    background-color: #fff; /* cor de “letterbox” (opcional) */

    border: solid 0.5rem ${theme.colors.primary};
    border-radius: 0.8rem;

    ${media.greaterThan('medium')`
      height: 30rem;
      width: 50rem;
      margin-left: 5rem;
    `}

    @media (min-width: 1500px) {
      height: 40rem;
      width: 70rem;
      margin-left: 5rem;
    }
  `}
`

export const Buttons = styled.div`
  ${media.greaterThan('medium')`
    margin-top: -8rem;
    `}
  ${InfoCardStaticWrapper} {
    margin-bottom: 5rem;
    width: 30rem;
  }
`
export const Technologies = styled.div`
  ${InfoCardStaticWrapper} {
    margin-bottom: 5rem;
    width: 30rem;
  }
`

export const Description = styled.h5`
  ${({ theme }) => css`
    margin-top: 5rem;
    margin-left: 5rem;

    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.gray};
    font-weight: 500;
    text-align: center;
    ${media.lessThan('medium')`
    width: 30rem;
    font-size: ${theme.font.sizes.medium};
    text-align: start;
    margin-left: 4rem;

    `}
    p {
      margin-bottom: 2rem;
    }
    @media (max-width: 380px) {
      margin-left: 3rem;
      max-width: 27rem;
    }
  `}
`

export const LeftContent = styled.div``

export const RightContent = styled.div`
  ${media.lessThan('medium')`
    margin-top: 5rem;
    `}
`
