import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  position: relative;
  display: grid;
  margin-top: 13rem;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 4fr;
  ${({ theme }) => css`
    border-top: solid ${theme.colors.primary} 0.6rem;
  `}
`

export const Glass = styled.div`
  position: absolute;
  top: 0;
  left: 2rem;
  right: 2rem;
  bottom: 2rem;
  background: linear-gradient(
    45deg,
    #fff,
    rgba(7, 154, 207, 0.5) 20%,
    rgba(4, 77, 104, 0.5) 30%,
    hsla(0, 0%, 100%, 0.5) 60%,
    rgba(4, 77, 104, 0.5) 75%,
    #fff
  );
  -webkit-clip-path: polygon(50% 30%, 0 0, 100% 0);
  clip-path: polygon(50% 30%, 0 0, 100% 0);
`

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 2rem;
  right: 2rem;
  bottom: 2rem;
  background: url('/img/background-interativo.gif');
  background-position: 85rem;
  background-size: 140rem 90rem;
  z-index: -2;
  -webkit-clip-path: polygon(50% 30%, 0 0, 100% 0);
  clip-path: polygon(50% 30%, 0 0, 100% 0);
`
export const BorderWindow = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 30rem;
    height: 35rem;
    background: ${theme.colors.primary};
    background-position: center;
    background-size: cover;
    z-index: -3;
    -webkit-clip-path: polygon(50% 30%, 0 0, 100% 0);
    clip-path: polygon(50% 30%, 0 0, 100% 0);
  `}
`

export const LeftContent = styled.div`
  ${({ theme }) => css`
    background: ${theme.gradients.bottom.darkBg};
    grid-row: 1;
    grid-column: 1;
    z-index: -5;
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

export const Window = styled.div`
  grid-row: 1;
  grid-column: 1/3;
  display: flex;
  justify-content: center;
  height: 20rem;
`
