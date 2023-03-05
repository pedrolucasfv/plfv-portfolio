import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    height: 100vh;
    width: 100%;
    margin-top: 13rem;
    background: white;
    display: grid;
    grid-template-columns: 1fr 4fr;
    border-top: solid ${theme.colors.primary} 0.5rem;
  `}
`
export const LeftContent = styled.div`
  ${({ theme }) => css`
    background: ${theme.gradients.darkBg};
    grid-row: 1;
    grid-column: 1;
  `}
`
export const RightContent = styled.div`
  ${({ theme }) => css`
    background: ${theme.gradients.lightBg};
    grid-row: 1;
    grid-column: 2;
  `}
`

export const MainContent = styled.div`
  grid-row: 1;
  grid-column: 1/3;
`

export const Title = styled.h2`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    margin-top: 10rem;
    font-size: ${theme.font.sizes.huge};
    text-transform: uppercase;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: url('/img/background-interativo.gif');
  `}
`

export const Children = styled.div``
export const Image = styled.div``
