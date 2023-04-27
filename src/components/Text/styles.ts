import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type AnimationProps = {
  animate: boolean
}

export const Wrapper = styled.main<AnimationProps>`
  ${({ theme, animate }) => css`
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
    opacity: ${animate ? 1 : 0};
    transition: opacity 2s;
    span {
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.xlarge};
      letter-spacing: 0.1rem;
      ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.xlarge};
    `}
    }
  `}
`
