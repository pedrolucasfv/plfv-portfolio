import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 4fr;
    border-bottom: 0.5rem solid ${theme.colors.primary};
  `}
`
export const LeftContent = styled.div`
  ${({ theme }) => css`
    background: ${theme.gradients.top.darkBg};
    grid-row: 1;
    grid-column: 1;
    border-right: solid ${theme.colors.primary} 0.5rem;
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
export const TitleContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2`
  max-width: 65rem;
  text-align: center;
  font-size: 6rem;
  text-transform: uppercase;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: url('/img/background-interativo.gif');
  margin-bottom: 8rem;
  ${media.lessThan('medium')`
  margin-left: 5rem;
  font-size: 4rem;
  `}
  @media (min-width: 1500px) {
    font-size: 8rem;
    max-width: 95rem;
  }
`

export const Children = styled.div`
  margin: 0 5rem;
  ${media.greaterThan('medium')`
  margin: 0 10rem;
`}
  @media (min-width: 1500px) {
    margin: 0 20rem;
  }
`
export const Image = styled.div``
