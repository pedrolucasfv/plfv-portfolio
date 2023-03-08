import styled, { css } from 'styled-components'
import {
  Wrapper as MenuWrapper,
  LogoWrapper as LogoMenu
} from 'components/Menu/styles'
import media from 'styled-media-query'

export const Wrapper = styled.main`
  .fix {
    animation: menu-fixed 0.5s forwards;
    @keyframes menu-fixed {
      0% {
        width: 55%;
        margin-left: 23%;
      }
      100% {
        width: 100%;
        margin-left: 0;
      }
    }
    ${MenuWrapper} {
      border-left: none;
      border-right: none;
    }
    ${LogoMenu} {
      ${media.lessThan('medium')`
      margin-left: 45%;    
    `}
    }
    position: fixed;
    top: 0;
    z-index: 10;
  }
  .normal {
    animation: menu-normal 0.3s forwards;
    @keyframes menu-normal {
      0% {
        width: 100%;
        margin-left: 0;
      }
      100% {
        width: 55%;
        margin-left: 23%;
      }
    }

    position: relative;
    top: 0;
    z-index: 10;
    ${MenuWrapper} {
      ${({ theme }) => css`
        border-left: 0.3rem solid ${theme.colors.primary};
        border-right: 0.3rem solid ${theme.colors.primary};
      `}
    }
  }
`

export const Menu = styled.div`
  ${({ theme }) => css`
    border-top: solid ${theme.colors.primary} 0.3rem;
    margin-top: -0.3rem;
    width: 55%;
    margin-left: 23%;
  `}
`
export const Background = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  bottom: 0%;
  right: 0%;
  z-index: -10;
  background: url('/img/background-interativo.gif');
  height: 100vh;
  width: 100%;
  background-position: center;
  background-size: cover;
`
