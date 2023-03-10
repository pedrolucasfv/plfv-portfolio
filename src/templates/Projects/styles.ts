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
  isSkyFall: boolean
  isShow: boolean
}

export const Container = styled.div<AnimeContainerProps>`
  ${({ isDeepFall, isSkyFall, isShow }) => css`
    ${media.greaterThan('medium')`
    -webkit-clip-path: polygon(0 0, 78% 0, 78% 100%, 0% 100%);
     clip-path: polygon(0 0, 78% 0, 78% 100%, 0% 100%);
  `}
    opacity: 1;
    transform: perspective(500px) translateZ(0px);
    width: 100%;
    ${isDeepFall &&
    css`
      animation: cai 1.5s forwards;
      @keyframes cai {
        from {
          opacity: 1;
          transform: perspective(500px) translateZ(0px);
        }
        to {
          opacity: 0.3;
          transform: perspective(500px) translateZ(-200px);
        }
      }
    `}
    ${isSkyFall &&
    css`
      animation: bounce 1s forwards;
      @keyframes bounce {
        from {
          display: block;
          transform: perspective(500px) translateZ(500px);
        }
        to {
          transform: perspective(500px) translateZ(0px);
        }
      }
    `}
    ${isShow &&
    css`
      display: none;
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
    display: flex;
    justify-content: center;
    align-items: center;
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

export const Button = styled.div`
  ${({ theme }) => css`
    margin-left: 5rem;
    width: 25rem;
    margin-top: -25rem;
    position: absolute;
    padding: 1rem 4rem;
    display: flex;
    justify-content: center;
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-weight: 600;
    background-image: url('/img/background-interativo.gif');
    border: 0.3rem solid ${theme.colors.primary};
    cursor: pointer;
    transition: letter-spacing 0.4s;
    letter-spacing: 0.3rem;
    border-radius: 0.7rem;
    &:hover {
      font-weight: ${theme.font.bold};
      color: ${theme.colors.white};
      letter-spacing: 1rem;
    }
  `}
`
