import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  position: relative;
  margin-top: 13rem;
`

export const Glass = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -5;
  background: linear-gradient(
    45deg,
    #fff,
    rgba(7, 154, 207, 0.5) 20%,
    rgba(4, 77, 104, 0.5) 30%,
    hsla(0, 0%, 100%, 0.5) 50%,
    rgba(4, 77, 104, 0.5) 85%,
    #fff
  );
`
export const Window = styled.div`
  ${({ theme }) => css`
    display: grid;
    height: 15rem;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 4fr;
    border-top: 0.4rem solid ${theme.colors.primary};
    clip-path: polygon(
      50% 50%,
      70% 0,
      100% 0,
      100% 70%,
      100% 100%,
      0 100%,
      0 0,
      30% 0
    );
    ${media.greaterThan('medium')`
  clip-path: polygon(
    50% 50%,
    60% 0,
    100% 0,
    100% 70%,
    100% 100%,
    0 100%,
    0 0,
    40% 0
  );
  `}
  `}
`
export const LeftContent = styled.div`
  ${({ theme }) => css`
    background: ${theme.gradients.bottom.darkBg};
    grid-row: 1;
    grid-column: 1;
    z-index: -5;
    border-right: solid ${theme.colors.primary} 0.5rem;
  `}
`
export const RightContent = styled.div`
  ${({ theme }) => css`
    background: ${theme.gradients.bottom.lightBg};
    grid-row: 1;
    grid-column: 2;
    z-index: -5;
  `}
`
export const BorderGlass = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -2;
    background: ${theme.colors.primary};
    clip-path: polygon(
      50% 46%,
      68% 0,
      100% 0,
      100% 70%,
      100% 100%,
      0 100%,
      0 0,
      32% 0
    );
    ${media.greaterThan('medium')`
    clip-path: polygon(
      50% 46%,
      59% 0,
      100% 0,
      100% 70%,
      100% 100%,
      0 100%,
      0 0,
      41% 0
    );
`}
  `}
`
