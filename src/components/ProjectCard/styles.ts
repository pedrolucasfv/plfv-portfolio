import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    height: 40rem;
    width: 32rem;
    background: ${theme.gradients.top.darkBg};
    color: white;
    display: grid;
    border: solid 0.3rem ${theme.colors.primary};
    border-radius: 0.8rem;
    box-shadow: 0.5rem 0.5rem 0.6rem rgb(0 0 0 / 30%);
    cursor: pointer;
    :hover {
      background: ${theme.gradients.top.blueBg};
    }
  `}
`

export const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  ${({ src, theme }) => css`
    height: 15rem;
    width: 24rem;
    background: url(${src});
    background-size: cover;
    border: solid 0.2rem ${theme.colors.white};
    border-radius: 0.8rem;
  `}
`

export const Name = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    margin-bottom: 2rem;
    color: ${theme.colors.primary};
  `}
`

export const Description = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    text-align: justify;
  `}
`

export const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 3rem;
`
