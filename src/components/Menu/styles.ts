import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.menu`
  ${({ theme }) => css`
    z-index: 10;
    background: ${theme.gradients.top.darkBg};
    display: flex;
    align-items: center;
    padding: 0 5rem;
    position: relative;

    height: 6rem;
    border-bottom: 0.3rem solid ${theme.colors.primary};
    border-left: 0.3rem solid ${theme.colors.primary};
    border-right: 0.3rem solid ${theme.colors.primary};
    border-bottom-left-radius: 0.7em;
    border-bottom-right-radius: 0.7rem;
    ${media.greaterThan('medium')`
      justify-content: space-between;
    `}
    ${media.lessThan('medium')`
    padding: 0 1rem;
  `}
  `}
`
export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  ${media.greaterThan('medium')`
  margin-left: 2rem;
  `}
`
type ImageProps = {
  src: string
}
export const Logo = styled.div<ImageProps>`
  ${({ src }) => css`
    background: url(${src});
    height: 7rem;
    width: 7rem;
    background-position: center;
    background-size: cover;
  `}
`
export const LogoTitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.white};
    margin-left: ${theme.spacings.xxsmall};
    letter-spacing: 0.4rem;
  `}
`

export const IconWrapper = styled.div`
  cursor: pointer;
  width: 2.4rem;
  height: 2.4rem;
  color: white;
  ${media.lessThan('medium')`
      margin-left: 0.5rem;
  `}
`

export const MenuGroup = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  align-items: center;
  > div {
    margin: 0 1.5rem;
    ${media.lessThan('medium')`
    margin: 0 0.5rem
    `}
  }
  ${media.greaterThan('medium')`
    padding: 7rem;
    margin-right: 2rem;
    > button { 
    padding: 1rem 2rem;
   }
  `}
`

export const MenuNav = styled.div`
  ${media.greaterThan('medium')`
    margin-right: 2rem;
  `}
  display: flex;
`

export const MenuLink = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.primary};

    margin: 0.3rem 1rem 0;
    padding: 1.8rem 2rem;
    cursor: pointer;
    transition: letter-spacing 0.4s;
    letter-spacing: 0.2rem;
    font-weight: 600;
    &:hover {
      font-weight: 800;
      color: ${theme.colors.white};
      letter-spacing: 0.6rem;
    }
  `}
`

type MenuToggleProps = {
  isOpenMenu: boolean
}

export const MenuToggle = styled.nav<MenuToggleProps>`
  ${({ isOpenMenu, theme }) => css`
    background: ${theme.gradients.top.lightBg};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    z-index: 20;
    width: 42%;
    left: 0;
    top: 0;
    border-right: 0.5rem solid ${theme.colors.primary};

    bottom: 0;
    height: 100vh;
    transition: opacity 0.3s ease-in-out;
    opacity: ${isOpenMenu ? 1 : 0};
    pointer-events: ${isOpenMenu ? 'all' : 'none'};

    > svg {
      margin: 1.5rem;
      cursor: pointer;
      width: 2rem;
      height: 2rem;
    }
    ${MenuNav} {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      padding: 1rem;
      flex: 1;
    }
    ${MenuLink} {
      color: black;
      font-weight: bold;
      font-size: 1.2rem;
      transform: ${isOpenMenu ? 'translateY(0)' : 'translateY(3rem)'};
      transition: transform 0.3s ease-in-out;
    }
  `}
`

export const Sombra = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 10;
`
