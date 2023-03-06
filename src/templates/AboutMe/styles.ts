import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const Image = styled.div`
  ${({ theme }) => css`
    background: url('/img/me.jpg');
    height: 50rem;
    width: 40rem;
    ${media.lessThan('huge')`
    height: 40rem;
    width: 35rem;
  `}
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border: solid ${theme.colors.primary} 0.5rem;
    border-radius: 1rem;
  `}
`
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  padding-bottom: 10rem;
`
export const LeftContent = styled.div`
  ${({ theme }) => css`
    border-right: solid 0.1rem ${theme.colors.lightGray};
    ${media.lessThan('huge')`
    padding-right: 10rem;
    `}
  `}
`
export const RightContent = styled.div`
  margin-left: 15%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Text = styled.h5`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.gray};
    font-weight: 500;
    text-align: justify;
    margin-top: 3rem;
    span {
      color: ${theme.colors.secondary};
      font-size: ${theme.font.sizes.xxlarge};
      letter-spacing: 0.1rem;
    }
  `}
`
export const Card = styled.div`
  margin-bottom: 5rem;
`
