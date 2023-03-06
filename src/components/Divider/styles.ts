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
  top: 0.5rem;
  left: 2.5rem;
  right: 2.5rem;
  bottom: 4.5rem;
  background: linear-gradient(
    45deg,
    #fff,
    rgba(7, 154, 207, 0.5) 20%,
    rgba(4, 77, 104, 0.5) 30%,
    hsla(0, 0%, 100%, 0.5) 50%,
    rgba(4, 77, 104, 0.5) 85%,
    #fff
  );
  -webkit-clip-path: polygon(50% 30%, 0 0, 100% 0);
  clip-path: polygon(50% 30%, 0 0, 100% 0);
`

export const Background = styled.div`
  position: absolute;

  top: 0.5rem;
  left: 2.5rem;
  right: 2.5rem;
  bottom: 4.5rem;
  background: url('/img/background-interativo.gif');
  background-position: 85rem;
  background-size: 120rem 96rem;
  z-index: -2;
  -webkit-clip-path: polygon(50% 30%, 0 0, 100% 0);
  clip-path: polygon(50% 30%, 0 0, 100% 0);
`
export const BorderWindow = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 30rem;
    height: 40rem;
    background: ${theme.colors.primary};
    background-position: center;
    background-size: cover;
    z-index: -3;
    -webkit-clip-path: polygon(50% 30%, 0 0, 100% 0);
    clip-path: polygon(50% 30%, 0 0, 100% 0);
    overflow: hidden;
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

export const Window = styled.div`
  grid-row: 1;
  grid-column: 1/3;
  display: flex;
  justify-content: center;
  height: 20rem;
`
