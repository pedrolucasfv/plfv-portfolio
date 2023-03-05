import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  height: 95vh;
`

export const Image = styled.div`
  background: url('/img/Logo.png');
  height: 50rem;
  width: 50rem;
  ${media.lessThan('huge')`
  height: 30rem;
  width: 30rem;
  `}
  background-position: center;
  background-size: cover;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    margin-top: -3rem;
    font-size: 6rem;
    margin-left: ${theme.spacings.xsmall};
    color: ${theme.colors.primary};

    ${media.lessThan('huge')`
    font-size: 4.5rem;
  `}
  `}
`
export const Description = styled.h3`
  ${({ theme }) => css`
    font-size: 4rem;
    color: ${theme.colors.primary};
    margin-left: ${theme.spacings.xsmall};
    ${media.lessThan('huge')`
    font-size: 3rem;
  `}
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    width: 85%;
    height: 80vh;
    background: ${theme.gradients.darkBg};
    display: flex;
    align-items: center;
    flex-direction: column;
    border-right: solid ${theme.colors.primary} 0.5rem;
    border-bottom: solid ${theme.colors.primary} 0.5rem;
  `}
`

export const ContentInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 4rem;
`

export const Glass = styled.div`
  position: absolute;
  left: 0%;
  top: 0%;
  bottom: 0%;
  right: 0%;
  background: linear-gradient(
    45deg,
    #fff,
    rgba(7, 154, 207, 0.5) 20%,
    rgba(4, 77, 104, 0.5) 30%,
    hsla(0, 0%, 100%, 0.5) 70%,
    rgba(4, 77, 104, 0.5) 90%,
    #fff
  );
  z-index: -5;
`

export const BorderBanner = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0%;
    width: 90%;
    height: 89vh;
    background: ${theme.gradients.darkBg};
    z-index: -4;
    border-right: solid ${theme.colors.primary} 0.5rem;
    border-bottom: solid ${theme.colors.primary} 0.5rem;
  `}
`

export const IntraBorder = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0%;
    width: 88%;
    height: 85vh;
    background: url('/img/background-interativo.gif');
    background-position: center;
    background-size: cover;
    z-index: -3;
    border-right: solid ${theme.colors.primary} 0.5rem;
    border-bottom: solid ${theme.colors.primary} 0.5rem;
  `}
`
export const GlassIntraBorder = styled.div`
  position: absolute;
  top: 0%;
  width: calc(88% - 0.5rem);
  height: calc(85vh - 0.5rem);
  background-position: center;
  background-size: cover;
  background: linear-gradient(
    45deg,
    #fff,
    rgba(7, 154, 207, 0.5) 9%,
    rgba(4, 77, 104, 0.5) 50%,
    hsla(0, 0%, 100%, 0.6) 70%,
    rgba(4, 77, 104, 0.5) 90%,
    #fff
  );
  z-index: -1;
`
