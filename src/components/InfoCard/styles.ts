import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    width: 35rem;
    @media (min-width: 1500px) {
      width: 40rem;
    }
    ${media.lessThan('medium')`
    width: 30rem;

  `}
    background: ${theme.gradients.top.darkBg};
    color: white;
    display: grid;
    border: solid 0.3rem ${theme.colors.primary};
    border-radius: 0.8rem;
    box-shadow: 0.5rem 0.5rem 0.6rem rgb(0 0 0 / 30%);
  `}
`
export const Content = styled.div`
  margin-top: -3.1rem;
  padding: 0 2.2rem;
`

export const Icon = styled.div`
  ${({ theme }) => css`
    margin-left: 1.8rem;
    background: ${theme.gradients.top.blueBg};
    width: 7rem;
    height: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: 0.3rem solid ${theme.colors.primary};

    svg {
      height: 4rem;
      width: 4rem;
    }
  `}
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    color: ${theme.colors.primary};
    margin: 1rem 0 2.3rem 0;
    ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.xlarge};
  `}
  `}
`

export const Items = styled.div``

export const Item = styled.li`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.white};
    margin: 1.7rem 0;
  `}
`

export const Button = styled.a`
  ${({ theme }) => css`
    text-decoration: none;
    padding: 1rem 4rem;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.white};
    text-transform: uppercase;
    font-weight: 600;
    background-image: url('/img/background-interativo.gif');
    border: 0.2rem solid ${theme.colors.primary};
    cursor: pointer;
    transition: letter-spacing 0.4s;
    letter-spacing: 0.3rem;
    &:hover {
      font-weight: ${theme.font.bold};
      color: ${theme.colors.white};
      letter-spacing: 1rem;
    }
  `}
`
