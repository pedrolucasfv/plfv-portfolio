import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  height: 100vh;
  width: 100%;
  background: white;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 4fr;
`
export const LeftContent = styled.div`
  ${({ theme }) => css`
    background: ${theme.gradients.top.darkBg};
    grid-row: 1;
    grid-column: 1;
  `}
`
export const RightContent = styled.div`
  ${({ theme }) => css`
    background: ${theme.gradients.top.lightBg};
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
    font-size: ${theme.font.sizes.huge};
    text-transform: uppercase;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: url('/img/background-interativo.gif');
  `}
`

export const Children = styled.div``
export const Image = styled.div``
