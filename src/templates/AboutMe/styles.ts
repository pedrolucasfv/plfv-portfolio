import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main``

export const Container = styled.div`
  margin-top: -1rem;
`

export const Image = styled.div`
  ${({ theme }) => css`
    background: url('/img/me.jpg');
    height: 40rem;
    width: 35rem;
    @media (min-width: 1500px) {
      height: 50rem;
      width: 40rem;
    }

    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border: solid ${theme.colors.primary} 1rem;
    border-radius: 1rem;
  `}
`
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  padding-bottom: 10rem;
  ${media.lessThan('medium')`
  grid-template-columns: 100%;
  `}
`
export const LeftContent = styled.div`
  ${({ theme }) => css`
    @media (max-width: 1500px) {
      padding-right: 10rem;
    }
    ${media.greaterThan('medium')`
    border-right: solid 0.1rem ${theme.colors.lightGray}; 
    `}
  `}
`
export const RightContent = styled.div`
  ${media.greaterThan('medium')`
  margin-left: 15%;
  `}
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

    ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.large};
    margin-left: 5rem;
    text-align: start;
    `}

    span {
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.xlarge};
      letter-spacing: 0.1rem;
      ${media.lessThan('medium')`
    font-size: ${theme.font.sizes.xlarge};
    `}
    }
  `}
`
export const Card = styled.div`
  margin-bottom: 5rem;
`
