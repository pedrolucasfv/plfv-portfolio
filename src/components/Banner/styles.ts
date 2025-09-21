import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const Image = styled.div`
  background: url('/img/Logo.png');
  height: 35rem;
  width: 35rem;
  @media (min-width: 1500px) {
    height: 50rem;
    width: 50rem;
  }
  background-position: center;
  background-size: cover;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    margin-top: -3rem;
    letter-spacing: 0.3rem;
    font-size: 6.5rem;
    margin-left: ${theme.spacings.xsmall};
    color: ${theme.colors.white};
    @media (min-width: 1500px) {
      font-size: 8.5rem;
    }
    ${media.lessThan('medium')`
    font-size: 3rem;
    text-align: center;
    margin-bottom: 4rem;
    width: 30rem;
  `}
    @media (max-width: 400px) {
      font-size: 2.5rem;
      width: 25rem;
    }
  `}
`
export const Description = styled.h3`
  ${({ theme }) => css`
    font-size: 3.5rem;

    color: ${theme.colors.white};
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    margin-left: ${theme.spacings.xsmall};

    @media (min-width: 1500px) {
      font-size: 4.5rem;
    }
    ${media.lessThan('medium')`
    font-size: 1.5rem;
    width: 25rem;
    text-align: center;
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
    background: ${theme.gradients.top.darkBg};
    -webkit-clip-path: polygon(0 0, 100% 0, 78% 100%, 23% 100%);
    clip-path: polygon(0 0, 100% 0, 78% 100%, 23% 100%);
  `}
`

export const ContentInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Glass = styled.div`
  ${({ theme }) => css`
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
    ${media.lessThan('medium')`
    border-bottom: 0.1rem solid ${theme.colors.primary}
    `}
    z-index: -5;
  `}
`

export const BorderContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 100%;
    height: 101vh;
    ${media.lessThan('medium')`
    height: 65vh;
  `}
    background: ${theme.colors.primary};
    -webkit-clip-path: polygon(0 0, 100% 0, 78% 100%, 23% 100%);
    clip-path: polygon(0 0, 100% 0, 78% 100%, 23% 100%);
  `}
`

export const Text = styled.div`
  ${({ theme }) => css`
    margin-top: 15rem;
    margin-left: 1.2rem;
    cursor: default;
    @media (min-width: 1500px) {
      font-size: 12rem;
      margin-top: 10rem;
    }
    ${media.lessThan('medium')`
    opacity: 0;
  `}
    font-weight: 700;
    max-width: 100rem;
    text-transform: uppercase;
    font-size: 5rem;
    ${media.greaterThan('medium')`
    font-size: 11rem;
    margin-bottom: 5rem;
    margin-top: 7rem;

    `}
    span {
      position: absolute;
      color: #fff;
      transform: translate(-50%, -50%);
    }
    span:nth-child(1) {
      color: ${theme.colors.darkGray};
      -webkit-text-stroke: 0.1rem white;
    }
    span:nth-child(2) {
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: url('/img/background-interativo.gif');
      background-size: 80rem 80rem;
      background-position: center;
      -webkit-text-stroke: 1px white;
      clip-path: 'polygon(0 0%, 100% 0%, 100% 100%, 0 100%)';
      transition: clip-path 2s;
    }
  `}
`
