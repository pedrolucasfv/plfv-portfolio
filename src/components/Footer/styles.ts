import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    margin-top: 10rem;
    height: 50rem;
    background: ${theme.gradients.top.darkBg};
    position: relative;
    z-index: -4;
    border-top: 0.5rem solid ${theme.colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`

export const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  color: white;
  margin: 0 10rem;
  ${media.greaterThan('huge')`
  margin: 0 20rem;
`}
`

export const Image = styled.div`
  grid-column: 1/3;
  grid-row: 1/4;
  height: 30rem;
  width: 30rem;
  background: url('/img/Logo.png');
  background-position: center;
  background-size: cover;
  align-self: center;
`

export const Line = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    height: 0.2rem;
    width: 100%;
    grid-column: 2/7;
    grid-row: 4;
  `}
`
export const Contact = styled.div`
  grid-column: 5/8;
  grid-row: 2/4;
  width: 35rem;
  height: 15rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-radius: 1rem;
`
export const Title = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.white};
  `}
`
export const IconList = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const Icon = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    margin-left: 1.8rem;
    width: 9rem;
    height: 9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 0.3rem solid ${theme.colors.primary};
    grid-column: 6/8;
    grid-row: 3;
    background: ${theme.gradients.top.blueBg};
    background-image: url('/img/background-interativo.gif');
    z-index: 10;
    svg {
      height: 4rem;
      width: 4rem;
    }
    :hover {
      svg {
        height: 6rem;
        width: 6rem;
      }
    }
  `}
`
export const Copyright = styled.div`
  margin-top: 2rem;
  grid-column: 2/7;
  grid-row: 4;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Text = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    color: ${theme.colors.primary};
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
  position: absolute;
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
