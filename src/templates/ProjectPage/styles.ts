import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  width: 75%;
  display: flex;
  flex-direction: column;
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
export const UpContent = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const DownContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10rem 0;
`

export const Description = styled.h5`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.gray};
    font-weight: 500;
    width: 50%;
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
