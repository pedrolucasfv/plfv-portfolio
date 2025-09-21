import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    height: 42rem;
    width: 32rem;
    background: ${theme.gradients.top.darkBg};
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: solid 0.3rem ${theme.colors.primary};
    border-radius: 0.8rem;
    box-shadow: 0.5rem 0.5rem 0.6rem rgb(0 0 0 / 30%);
    position: relative;
    text-align: center;
    cursor: pointer;
    :hover {
      background: ${theme.gradients.top.blueBg};
    }
  `}
`
type StatusProps = {
  type:
    | 'none'
    | 'Best Project'
    | 'Freelance'
    | 'Refactored'
    | 'Hackathon'
    | 'Social Project'
}

export const Status = styled.div<StatusProps>`
  ${({ theme, type }) => css`
    border-radius: 2rem;
    padding: 0.2rem 1rem;
    font-size: ${theme.font.sizes.small};
    display: flex;
    align-items: center;
    color: ${theme.colors.white};
    height: 3rem;
    justify-self: end;
    align-self: self-end;
    margin-top: -2rem;
    margin-right: 2rem;
    margin-bottom: 1rem;
    div {
      background-color: ${theme.colors.primary};
      height: 1rem;
      width: 1rem;
      border-radius: 50%;
      margin-right: 0.5rem;
    }

    ${type == 'none' &&
    css`
      border: none;
    `}
    ${type == 'Best Project' &&
    css`
      border: 0.1rem solid ${theme.colors.primary};
      div {
        background-color: ${theme.colors.primary};
      }
    `}
    ${type == 'Freelance' &&
    css`
      border: 0.1rem solid ${theme.colors.red};
      div {
        background-color: ${theme.colors.red};
      }
    `}
    ${type == 'Refactored' &&
    css`
      border: 0.1rem solid ${theme.colors.secondary};
      div {
        background-color: ${theme.colors.secondary};
      }
    `}
    ${type == 'Hackathon' &&
    css`
      border: 0.1rem solid ${theme.colors.gray};
      div {
        background-color: ${theme.colors.gray};
      }
    `}
    ${type == 'Social Project' &&
    css`
      border: 0.1rem solid ${theme.colors.white};
      div {
        background-color: ${theme.colors.white};
      }
    `}
  `}
`

export const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`

type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  ${({ src, theme }) => css`
    height: 15rem;
    width: 24rem;
    background: url(${src});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    border: solid 0.2rem ${theme.colors.white};
    border-radius: 0.8rem;
  `}
`

export const Name = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    color: ${theme.colors.primary};
    margin-bottom: 1.5rem;
  `}
`

export const Description = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    margin-bottom: 2rem;
  `}
`

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 0 3rem;
`
