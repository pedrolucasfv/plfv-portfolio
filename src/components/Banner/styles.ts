import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const Image = styled.div`
  background: url('/img/Logo.png');
  height: 50rem;
  width: 50rem;
  ${media.lessThan('huge')`
  height: 30rem;
  width: 30rem;
  `}
  background-position: center;
  background-size: cover;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    margin-top: -3rem;
    letter-spacing: 0.3rem;

    font-size: 8.5rem;
    margin-left: ${theme.spacings.xsmall};
    color: ${theme.colors.white};
    ${media.lessThan('huge')`
    font-size: 4.5rem;
  `}
  `}
`
export const Description = styled.h3`
  ${({ theme }) => css`
    font-size: 4.5rem;
    color: ${theme.colors.white};
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    margin-left: ${theme.spacings.xsmall};

    ${media.lessThan('huge')`
    font-size: 3rem;
  `}
  `}
`
export const Text = styled.h3`
  ${({ theme }) => css`
    margin-top: 10rem;
    font-size: 12rem;
    margin-left: ${theme.spacings.xsmall};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: url('/img/background-interativo2.gif');
    ${media.lessThan('huge')`
    font-size: 3rem;
  `}
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0.7rem;
    right: 0.7rem;
    bottom: 0.3rem;
    background: ${theme.gradients.darkBg};
    display: flex;
    align-items: center;
    flex-direction: column;
    -webkit-clip-path: polygon(0 0, 100% 0, 78% 100%, 23% 100%);
    clip-path: polygon(0 0, 100% 0, 78% 100%, 23% 100%);
  `}
`

export const ContentInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 4rem;
`

export const Glass = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  bottom: -1%;
  right: 0%;
  background: linear-gradient(
    45deg,
    #fff,
    rgba(7, 154, 207, 0.5) 20%,
    rgba(4, 77, 104, 0.5) 30%,
    hsla(0, 0%, 100%, 0.5) 50%,
    rgba(4, 77, 104, 0.5) 85%,
    #fff
  );
  z-index: -5;
`

export const BorderContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 101vh;
    background: ${theme.colors.primary};
    -webkit-clip-path: polygon(0 0, 100% 0, 78% 100%, 23% 100%);
    clip-path: polygon(0 0, 100% 0, 78% 100%, 23% 100%);
  `}
`
