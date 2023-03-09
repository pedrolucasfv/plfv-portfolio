import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  position: relative;
`
export const Content = styled.div`
  width: 75%;
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 1fr;
  padding-bottom: 5rem;
  ${media.greaterThan('medium')`
  grid-template-columns: 1fr 1fr;
  `}
  @media (min-width: 1500px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
type AnimeContainerProps = {
  isDeepFall: boolean
}

export const Container = styled.div<AnimeContainerProps>`
  ${({ isDeepFall }) => css`
    ${media.greaterThan('medium')`
    -webkit-clip-path: polygon(0 0, 78% 0, 78% 100%, 0% 100%);
     clip-path: polygon(0 0, 78% 0, 78% 100%, 0% 100%);
  `}
    opacity: 1;
    width: 100%;
    transition: transform 1.5s, opacity 1.9s;
    transform: perspective(500px) translateZ(0px);
    ${isDeepFall &&
    css`
      opacity: 0.3;
      transform: perspective(500px) translateZ(-100px);
    `}
  `}
`

export const ProjectCard = styled.a`
  text-decoration: none;
`
type AnimeGlassProps = {
  isAnimation: boolean
}
export const Glass = styled.div<AnimeGlassProps>`
  ${({ theme, isAnimation }) => css`
    height: 100%;
    //border-top: 0.5rem solid ${theme.colors.primary};
    //border-bottom: 0.5rem solid ${theme.colors.primary};
    position: absolute;
    left: 78%;
    top: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      #fff,
      rgba(7, 154, 207, 0.5) 20%,
      rgba(4, 77, 104, 0.5) 30%,
      hsla(0, 0%, 100%, 0.5) 50%,
      rgba(4, 77, 104, 0.5) 85%,
      #fff
    );
    z-index: -9;
    border-left: 0.1rem solid ${theme.colors.primary};
    transition: transform 1.2s;
    ${isAnimation &&
    css`
      transform: rotateY(45deg);
    `}
  `}
`

export const RiverSide = styled.div`
  ${({ theme }) => css`
    background: ${theme.gradients.top.lightBg};
    position: absolute;
    right: 0%;
    top: 0%;
    height: 100%;
    width: 13%;
    border-top: 0.5rem solid ${theme.colors.primary};
    border-bottom: 0.5rem solid ${theme.colors.primary};
  `}
`

export const Background = styled.div`
  position: absolute;
  top: 0rem;
  left: 0rem;
  right: 0rem;
  bottom: 0rem;
  background: url('/img/background-interativo.gif');
  background-position: center;
  background-size: cover;
  -webkit-clip-path: polygon(0 0, 78% 0, 78% 100%, 0% 100%);
  clip-path: polygon(0 0, 78% 0, 78% 100%, 0% 100%);
  opacity: 0.3;
  transition: opacity 2s;
  :hover {
    opacity: 1;
  }
`
