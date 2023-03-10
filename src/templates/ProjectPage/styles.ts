import styled, { css } from 'styled-components'
import media from 'styled-media-query'
import { Wrapper as InfoCardWrapper } from 'components/InfoCard/styles'
export const Wrapper = styled.main`
  width: 75%;
  display: flex;
  padding-bottom: 4rem;
`
export const Media = styled.div`
  grid-column: 2/5;
  grid-row: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
type ImageProps = {
  src: string
}
export const Image = styled.div<ImageProps>`
  ${({ src, theme }) => css`
    height: 30rem;
    width: 55rem;
    background: url(${src});
    background-position: center;
    background-size: cover;
    border: solid 0.5rem ${theme.colors.primary};
    border-radius: 0.8rem;
    ${media.greaterThan('medium')`
    height: 30rem;
    width: 55rem;
    margin-left: 5rem;
    `}
    @media (min-width: 1500px) {
      height: 40rem;
      width: 70rem;
    }
  `}
`

export const Buttons = styled.div`
  margin-top: -8rem;
  ${InfoCardWrapper} {
    margin-bottom: 5rem;
    width: 30rem;
  }
`

export const Description = styled.h5`
  ${({ theme }) => css`
    margin-top: 5rem;
    margin-left: 7rem;

    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.gray};
    font-weight: 500;
    text-align: center;

    ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.large};
    margin-left: 5rem;
    text-align: start;
    `}
    p {
      margin-bottom: 2rem;
    }
  `}
`

export const LeftContent = styled.div``

export const RightContent = styled.div``
