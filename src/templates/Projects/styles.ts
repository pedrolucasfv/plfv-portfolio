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
export const Container = styled.div`
  -webkit-clip-path: polygon(0 0, 78% 0, 78% 100%, 0% 100%);
  clip-path: polygon(0 0, 78% 0, 78% 100%, 0% 100%);
`

export const ProjectCard = styled.div``

export const Glass = styled.div`
  ${({ theme }) => css`
    height: 100%;
    //border-top: 0.5rem solid ${theme.colors.primary};
    //border-bottom: 0.5rem solid ${theme.colors.primary};
    position: absolute;
    left: 0;
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
