import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  width: 75%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
  grid-template-rows: 1fr 1fr;
`
export const Media = styled.div`
  grid-column: 2/5;
  grid-row: 1;
  display: flex;
  justify-content: center;
`
type ImageProps = {
  src: string
}
export const Image = styled.div<ImageProps>`
  ${({ src, theme }) => css`
    height: 45rem;
    width: 65rem;
    background: url(${src});
    background-position: center;
    background-size: cover;
    border: solid 0.2rem ${theme.colors.white};
    border-radius: 0.8rem;
  `}
`

export const Buttons = styled.div`
  grid-row: 1;
  grid-column: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Description = styled.h5`
  ${({ theme }) => css`
    grid-row: 2;
    grid-column: 2/5;
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.gray};
    font-weight: 500;
    text-align: justify;
    margin-top: 3rem;

    ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.large};
    margin-left: 5rem;
    text-align: start;
    `}

    span {
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.xxlarge};
      letter-spacing: 0.1rem;
      ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.xlarge};
    `}
    }
  `}
`
