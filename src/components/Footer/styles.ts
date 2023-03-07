import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    margin-top: 10rem;
    height: 50rem;
    background: ${theme.gradients.top.darkBg};
    position: relative;
    z-index: -5;
    border-top: 0.5rem solid ${theme.colors.primary};
  `}
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
export const Window = styled.div`
  grid-column: 3;
  grid-row: 1;
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

export const Image = styled.div`
  grid-column: 1/3;
  grid-row: 1/4;
  height: 35rem;
  width: 35rem;
  background: url('/img/Logo.png');
  background-position: center;
  background-size: cover;
  align-self: center;
`

export const Content = styled.div`
  display: grid;
  grid-template-rows: 25% 25% 25% 25%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  margin: 0 10rem;
  ${media.greaterThan('huge')`
  margin: 0 20rem;
`}
`

export const Line = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    height: 0.2rem;
    width: 100%;
    grid-column: 1/6;
    grid-row: 4;
  `}
`
