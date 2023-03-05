import styled, { css } from 'styled-components'

export const Wrapper = styled.main``

type ImageProps = {
  src: string
}

export const Background = styled.div<ImageProps>`
  ${({ src }) => css`
    position: fixed;
    top: 0%;¨
    left: 0%;
    bottom: 0%;
    right: 0%;
    z-index: -10;
    background: url(${src});
    height: 100vh;
    width: 100%;
    background-position: center;
    background-size: cover;
  `}
`
