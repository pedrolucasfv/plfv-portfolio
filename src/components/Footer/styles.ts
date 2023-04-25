import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  margin-top: 10rem;
  position: relative;
`

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.gradients.top.darkBg};
    clip-path: polygon(
      50% 10%,
      65% 0,
      100% 0,
      100% 70%,
      100% 100%,
      0 100%,
      0 0,
      35% 0
    );
    ${media.greaterThan('medium')`
    clip-path: polygon(50% 20%, 58% 0, 100% 0, 100% 70%, 100% 100%, 0 100%, 0 0, 42% 0);
    `}
    border-top: 0.5rem solid ${theme.colors.primary};
  `}
`

export const Content = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  color: white;
  padding-top: 5rem;
  margin: 0 10rem;

  ${media.lessThan('medium')`
  display: flex;
  flex-direction: column;
  margin: 0;
  `}
  ${media.greaterThan('huge')`
  margin: 0 20rem;
`}
`

export const Image = styled.div`
  grid-column: 1/4;
  grid-row: 1/4;
  height: 20rem;
  width: 30rem;
  background: url('/img/Logo.png');
  background-position: center;
  background-size: cover;
  align-self: center;
  margin-bottom: 5rem;
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
  ${({ theme }) => css`
    grid-column: 5/8;
    grid-row: 1/4;
    width: 37rem;
    height: 17rem;
    display: flex;
    margin-top: 3rem;
    margin-left: 4rem;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    border-radius: 1rem;
    background: ${theme.gradients.top.darkBg};
    border: 0.5rem solid ${theme.colors.primary};
    position: relative;
    background-image: url('/img/background-interativo.gif');
    ${media.lessThan('medium')`
    margin: 3rem 0;
    margin-left: 5%;
    `}
    @media (max-width: 400px) {
      width: 34rem;
    }
  `}
`

export const IconList = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`

export const Icon = styled.a`
  ${({ theme }) => css`
    margin: 0 0.7rem;
    width: 9rem;
    height: 9rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 0.3rem solid ${theme.colors.primary};
    grid-column: 6/8;
    grid-row: 3;
    background: ${theme.gradients.top.darkBg};
    cursor: pointer;
    z-index: 1;
    transition: background-color 1s;

    svg {
      color: white;
      height: 4rem;
      width: 4rem;
      transition: width 0.4s;
      transition: height 0.4s;
    }
    :hover {
      background: ${theme.gradients.top.blueBg};
      svg {
        height: 5rem;
        width: 5rem;
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
    text-align: center;
    letter-spacing: 0.5rem;
    color: ${theme.colors.primary};
  `}
`

export const Glass = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -2;
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
export const GlassContact = styled.div`
  position: absolute;
  top: 0;
  left: 0;
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
  z-index: 0;
`

export const BorderGlass = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: ${theme.colors.primary};
    clip-path: polygon(
      50% 9%,
      63% 0,
      100% 0,
      100% 70%,
      100% 100%,
      0 100%,
      0 0,
      37% 0
    );
    ${media.greaterThan('medium')`
    clip-path: polygon(50% 18.5%, 57.5% 0, 100% 0, 100% 70%, 100% 100%, 0 100%, 0 0, 42.5% 0);

`}
  `}
`
